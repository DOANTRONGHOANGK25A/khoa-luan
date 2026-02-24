# KẾ HOẠCH NẮM BẮT TOÀN BỘ KHÓA LUẬN

> **Mục tiêu**: Hiểu sâu từng lớp (layer) của hệ thống để **tự tin bảo vệ khóa luận**, trả lời được mọi câu hỏi của hội đồng.

> **Cách dùng**: Đọc từ trên xuống, hoàn thành mỗi giai đoạn trước khi sang giai đoạn sau. Mỗi giai đoạn có **checklist** và **câu hỏi kiểm tra** — tự trả lời được hết thì mới qua bước tiếp.

---

## Giai đoạn 1: Hiểu Cơ sở dữ liệu (Database)

**Thời gian**: ~1–2 ngày  
**File cần đọc**: `backend/schema.sql`

### Cần nắm
- [ ] Hệ thống có **5 bảng**: `users`, `diplomas`, `diploma_files`, `approval_logs`, `chain_logs`
- [ ] Bảng `users` lưu 4 role: `ADMIN`, `STAFF`, `MANAGER`, `ISSUER` — mỗi role làm được gì
- [ ] Bảng `diplomas` có **vòng đời trạng thái**: `PENDING → APPROVED → ISSUED → REVOKED` (và nhánh `REJECTED`)
- [ ] Bảng `diploma_files` lưu file dạng **BYTEA** (binary) trực tiếp trong DB, có 3 loại: `PORTRAIT`, `DIPLOMA`, `TRANSCRIPT`
- [ ] Bảng `approval_logs` là **append-only** — chỉ thêm, không sửa/xóa — để ghi lại ai duyệt/từ chối
- [ ] Bảng `chain_logs` cũng **append-only** — ghi lại mỗi lần ghi lên blockchain (`ISSUE` / `REVOKE`), kèm `tx_id` và `record_hash`
- [ ] Trigger `set_updated_at()` tự động cập nhật `updated_at` khi UPDATE bảng `diplomas`
- [ ] Ràng buộc CHECK: `record_hash` phải đúng 64 ký tự hex (`^[0-9a-f]{64}$`)

### Câu hỏi tự kiểm tra
1. Tại sao `approval_logs` và `chain_logs` thiết kế append-only? (Gợi ý: tính minh bạch, audit trail)
2. Tại sao lưu file dạng BYTEA thay vì lưu đường dẫn file trên ổ đĩa? (Gợi ý: đơn giản, tính toàn vẹn, backup dễ)
3. Trường `record_hash` trong `chain_logs` để làm gì? Nó tính từ đâu?
4. Vẽ lại sơ đồ quan hệ giữa 5 bảng từ trí nhớ (không nhìn code).

---

## Giai đoạn 2: Hiểu Backend — Xác thực & Phân quyền

**Thời gian**: ~1 ngày  
**File cần đọc**: `backend/routes/auth.js`, `backend/middlewares/auth.js`, `backend/middlewares/role.js`, `backend/src/sessionStore.js`

### Cần nắm
- [ ] Đăng nhập bằng `username` + `password`, dùng **bcrypt** để so sánh hash
- [ ] Sau khi đăng nhập, server tạo **session token** (UUID random) lưu trong bộ nhớ (`sessionStore`)
- [ ] Mỗi request gửi token qua header `Authorization: Bearer <token>`
- [ ] Middleware `requireAuth` kiểm tra token → gắn `req.user = { id, role, username }`
- [ ] Middleware `requireRole("STAFF", "MANAGER",...)` kiểm tra `req.user.role` có trong danh sách cho phép không
- [ ] Token có thời hạn (TTL) — hết hạn thì phải đăng nhập lại

### Câu hỏi tự kiểm tra
1. Tại sao dùng session-based auth thay vì JWT? (Gợi ý: đơn giản hơn cho dự án này)
2. Nếu server restart, điều gì xảy ra với các session đang hoạt động?
3. `requireRole("MANAGER")` đặt trước hay sau `requireAuth`? Tại sao thứ tự quan trọng?

---

## Giai đoạn 3: Hiểu Backend — Luồng nghiệp vụ chính

**Thời gian**: ~2–3 ngày  
**File cần đọc**: `backend/routes/diplomas.js` (file lớn nhất, ~690 dòng), `docs/sequence-flows.md`

### Luồng 1: Tạo hồ sơ (STAFF)
- [ ] `POST /api/diplomas` — multipart form với 7 trường text + 3 file (portrait, diploma, transcript)
- [ ] Dùng **multer** để xử lý file upload (lưu trong memory buffer)
- [ ] Dùng **transaction** (`BEGIN` → `INSERT diplomas` → `INSERT diploma_files` x3 → `COMMIT`)
- [ ] Nếu `serial_no` trùng → lỗi 409 Conflict

### Luồng 2: Duyệt/Từ chối (MANAGER)
- [ ] `POST /api/diplomas/:id/approve` — chỉ duyệt được hồ sơ `PENDING`
- [ ] `POST /api/diplomas/:id/reject` — từ chối kèm lý do (`note`)
- [ ] Cả hai đều dùng `SELECT ... FOR UPDATE` → tránh race condition
- [ ] Ghi log vào `approval_logs`

### Luồng 3: Phát hành lên blockchain (ISSUER)
- [ ] `POST /api/diplomas/:id/issue` — **phần quan trọng nhất**
- [ ] Bắt buộc upload file `wallet.json` chứa `mspId`, `certificate`, `privateKey`
- [ ] Tính `recordHash` từ dữ liệu diploma + SHA-256 của 3 file → tạo canonical text → hash
- [ ] Gọi chaincode `IssueDiploma(serialNo, jsonRecordString)` qua gRPC
- [ ] Lưu `tx_id` và `record_hash` vào `chain_logs`

### Luồng 4: Thu hồi (ISSUER)
- [ ] `POST /api/diplomas/:id/revoke` — tương tự issue nhưng gọi `RevokeDiploma`
- [ ] Đọc on-chain trước (`chainRead`) để lấy `recordHash` cũ, rồi ghi log

### Luồng 5: Gửi lại hồ sơ bị từ chối (STAFF)
- [ ] `POST /api/diplomas/:id/resubmit` — chuyển `REJECTED → PENDING`
- [ ] Xóa `rejected_reason`, `rejected_role`, `rejected_at`

### Câu hỏi tự kiểm tra
1. Tại sao cần `SELECT ... FOR UPDATE` khi duyệt hồ sơ?
2. Giải thích toàn bộ quy trình từ lúc STAFF tạo hồ sơ đến lúc ISSUER phát hành lên blockchain — có bao nhiêu bước?
3. Nếu chaincode trả lỗi `ALREADY_EXISTS` thì phía backend xử lý thế nào?
4. Tại sao ISSUER cần upload wallet thay vì server tự lưu sẵn private key? (Gợi ý: bảo mật, trách nhiệm cá nhân)

---

## Giai đoạn 4: Hiểu cơ chế Hashing & Xác thực toàn vẹn

**Thời gian**: ~1 ngày  
**File cần đọc**: `backend/services/recordHash.js`

### Cần nắm
- [ ] `recordHash` = SHA-256 của **canonical text** (chuỗi chuẩn hóa)
- [ ] Canonical text gồm 11 trường theo thứ tự cố định:
  ```
  serialNo=...
  studentId=...
  studentName=...
  birthDate=YYYY-MM-DD
  major=...
  ranking=...
  gpa=X.XX
  graduationYear=YYYY
  portraitSha256=<64 hex>
  diplomaSha256=<64 hex>
  transcriptSha256=<64 hex>
  ```
- [ ] Mỗi trường được **chuẩn hóa** (normalize): trim, collapse whitespace, NFC unicode, ngày chuẩn YYYY-MM-DD, GPA 2 chữ số thập phân
- [ ] File ảnh/PDF cũng được hash SHA-256 riêng → đưa vào canonical text
- [ ] Kết quả cuối: `recordHash` = `sha256(toàn_bộ_canonical_text)` — 64 ký tự hex

### Tại sao quan trọng?
`recordHash` là **cầu nối giữa off-chain (database) và on-chain (blockchain)**. Khi xác thực:
- Tính lại `recordHash` từ dữ liệu trong DB → gọi là `computedRecordHash`
- Đọc `recordHash` từ blockchain → gọi là `onchain.recordHash`
- **Nếu hai hash khớp nhau** → dữ liệu chưa bị sửa đổi ✅

### Câu hỏi tự kiểm tra
1. Nếu ai đó sửa tên sinh viên trong database, `computedRecordHash` có thay đổi không? Kết quả xác thực sẽ ra sao?
2. Tại sao cần chuẩn hóa (normalize) trước khi hash? Chuyện gì xảy ra nếu không chuẩn hóa?
3. Tại sao hash cả 3 file (ảnh, bằng, bảng điểm) vào recordHash?

---

## Giai đoạn 5: Hiểu Blockchain — Chaincode

**Thời gian**: ~1–2 ngày  
**File cần đọc**: `chaincode/vanbang-chaincode/lib/vanbangContract.js`

### Cần nắm
- [ ] Chaincode chạy trên **Hyperledger Fabric** — mạng blockchain doanh nghiệp (permissioned)
- [ ] Contract có **3 function chính**:
  - `IssueDiploma(serialNo, jsonRecordString)` — ghi mới, kiểm tra chống trùng
  - `RevokeDiploma(serialNo, revokedAt)` — đổi status ISSUED → REVOKED
  - `QueryDiploma(serialNo)` / `ReadDiploma(serialNo)` — đọc dữ liệu on-chain
- [ ] Dữ liệu on-chain bao gồm: toàn bộ thông tin sinh viên + `recordHash` + `status` + `txId`
- [ ] `ctx.stub.getState(serialNo)` — đọc state từ ledger theo key
- [ ] `ctx.stub.putState(serialNo, ...)` — ghi state vào ledger
- [ ] `ctx.stub.getTxID()` — lấy transaction ID tự động sinh bởi Fabric
- [ ] Validate: kiểm tra `recordHash` phải là 64 ký tự hex, kiểm tra các trường bắt buộc

### Câu hỏi tự kiểm tra
1. Dữ liệu đã ghi lên blockchain có thể xóa/sửa được không? Tại sao?
2. `serialNo` đóng vai trò gì trong ledger? (Gợi ý: key của world state)
3. Tại sao chaincode kiểm tra `ALREADY_EXISTS` trước khi issue?
4. Sự khác biệt giữa `submit` (ghi) và `evaluate` (đọc) khi gọi chaincode?

---

## Giai đoạn 6: Hiểu cách Backend kết nối Blockchain

**Thời gian**: ~1 ngày  
**File cần đọc**: `backend/services/fabricClient.js`, `backend/services/fabricDiploma.js`

### Cần nắm
- [ ] Backend kết nối Fabric peer qua **gRPC + TLS**
- [ ] Dùng **Fabric Gateway SDK** (`@hyperledger/fabric-gateway`) — SDK chính thức
- [ ] `getGateway()` — tạo kết nối bằng cert + private key của admin (cấu hình sẵn trong `.env`)
- [ ] `connectWithWallet(mspId, cert, key)` — tạo kết nối tạm bằng wallet upload từ người dùng
- [ ] `chainIssueWithWallet()` — gọi `contract.submit("IssueDiploma", ...)` → ghi lên blockchain
- [ ] `chainRead()` — gọi `contract.evaluate("QueryDiploma", ...)` → chỉ đọc, không ghi

### Câu hỏi tự kiểm tra
1. Tại sao cần TLS khi kết nối peer? (Gợi ý: mã hóa, xác thực server)
2. `submit` vs `evaluate` khác nhau thế nào? Cái nào tạo transaction mới?
3. File `.env` cần những biến môi trường nào cho Fabric? Liệt kê ra.

---

## Giai đoạn 7: Hiểu luồng Xác thực công khai (Public Verify)

**Thời gian**: ~1 ngày  
**File cần đọc**: `backend/routes/public.js`, `frontend/src/pages/VerifyPage.jsx`

### Cần nắm
- [ ] API `GET /api/public/verify?serialNo=...` — **không cần đăng nhập**
- [ ] Quy trình xác thực:
  1. Tìm diploma trong DB theo `serial_no`
  2. Tính `computedRecordHash` từ dữ liệu off-chain (DB + file)
  3. Đọc `recordHash` từ blockchain (`chainRead`)
  4. So sánh: `match = (computedRecordHash === onchain.recordHash)`
- [ ] Trả về: hash tính được, dữ liệu on-chain, trạng thái off-chain, kết quả match
- [ ] API `GET /api/public/search` — tìm kiếm theo serialNo, studentId, studentName (chỉ hiện ISSUED/REVOKED)
- [ ] Frontend `VerifyPage.jsx` hiển thị kết quả so sánh trực quan cho người dùng

### Câu hỏi tự kiểm tra
1. Nếu `match = false` thì có những nguyên nhân nào? Liệt kê ít nhất 3 trường hợp.
2. Tại sao API verify không cần đăng nhập? (Gợi ý: mục đích công khai, ai cũng có thể kiểm tra)
3. Giải thích bằng lời cho người không biết IT: "Hệ thống xác thực văn bằng hoạt động như thế nào?"

---

## Giai đoạn 8: Hiểu Frontend

**Thời gian**: ~2 ngày  
**File cần đọc**: `frontend/src/router/index.jsx`, `frontend/src/pages/*.jsx`

### Cần nắm
- [ ] Dùng **React 19** + **Vite** + **Ant Design** (UI library) + **React Router v7**
- [ ] 9 trang chính, mỗi trang phục vụ 1 chức năng:

| Trang | Role | Chức năng |
|---|---|---|
| `LoginPage` | Tất cả | Đăng nhập |
| `StaffDashboardPage` | STAFF | Dashboard tổng quan |
| `DiplomaCreatePage` | STAFF | Tạo/Sửa hồ sơ + upload file |
| `DiplomaListPage` | Internal | Danh sách hồ sơ + tìm kiếm |
| `DiplomaDetailPage` | Internal | Chi tiết hồ sơ + logs |
| `ApprovalPage` | MANAGER | Duyệt/Từ chối hồ sơ |
| `IssuancePage` | ISSUER | Phát hành/Thu hồi + upload wallet |
| `AdminUsersPage` | ADMIN | Quản lý tài khoản |
| `VerifyPage` | Công khai | Xác thực văn bằng |

- [ ] Phân quyền trên frontend: `RequireAuth` component bảo vệ route
- [ ] Gọi API qua **Axios** với interceptor gắn token tự động
- [ ] Xử lý token hết hạn: interceptor bắt lỗi 401 → redirect về login

### Câu hỏi tự kiểm tra
1. Ở frontend, việc kiểm tra role có đủ bảo mật không? Tại sao vẫn cần kiểm tra ở backend?
2. Liệt kê sự tương ứng giữa mỗi trang frontend và API backend mà nó gọi.

---

## Giai đoạn 9: Hiểu Fabric Network & Deploy

**Thời gian**: ~1 ngày  
**File cần đọc**: `chaincode/DEPLOY.sh`, `chaincode/RESUME.sh`, `docs/network.md`

### Cần nắm
- [ ] Dùng **test-network** có sẵn của Fabric Samples (2 org, 2 peer, 1 orderer)
- [ ] Deploy qua script `network.sh`: `down` → `up createChannel -ca` → `deployCC`
- [ ] Flag `-ca` nghĩa là dùng **Fabric CA** (Certificate Authority) thay vì crypto tĩnh
- [ ] Chaincode deploy bằng **standard lifecycle** (package → install → approve → commit)
- [ ] `RESUME.sh` — khởi động lại container Docker sau khi reboot
- [ ] Channel: `mychannel`, Chaincode name: `vanbang`

### Câu hỏi tự kiểm tra
1. Hyperledger Fabric khác Bitcoin/Ethereum ở điểm nào? (Gợi ý: permissioned vs permissionless)
2. Trong test-network có bao nhiêu tổ chức (org)? Mỗi org có những thành phần gì?
3. Certificate Authority (CA) trong Fabric làm nhiệm vụ gì?
4. Tại sao cần channel? Channel giải quyết vấn đề gì?

---

## Giai đoạn 10: Tổng hợp & Chuẩn bị bảo vệ

**Thời gian**: ~1–2 ngày

### Bài tập tổng hợp
- [ ] **Vẽ sơ đồ kiến trúc tổng thể** (không nhìn code): Frontend ↔ Backend ↔ PostgreSQL ↔ Fabric
- [ ] **Viết lại workflow phát hành** bằng lời: từ lúc STAFF nhập → MANAGER duyệt → ISSUER phát hành → ghi blockchain
- [ ] **Demo thực hành**: Chạy toàn bộ hệ thống, tạo 1 hồ sơ, duyệt, phát hành, rồi xác thực trên trang public
- [ ] **Trả lời 10 câu hỏi khó** (bên dưới)

### 10 câu hỏi hội đồng có thể hỏi
1. Tại sao chọn Hyperledger Fabric mà không dùng Ethereum?
2. Dữ liệu nào lưu on-chain, dữ liệu nào lưu off-chain? Tại sao không lưu hết lên blockchain?
3. `recordHash` tính như thế nào? Nếu sửa 1 ký tự trong tên sinh viên thì hash có thay đổi không?
4. Hệ thống xác thực tính toàn vẹn ra sao? Giải thích cơ chế so sánh hash.
5. Nếu database bị hack và sửa dữ liệu, hệ thống phát hiện được không?
6. Wallet (certificate + private key) dùng để làm gì? Tại sao không lưu trên server?
7. Giải thích luồng phát hành văn bằng từ đầu đến cuối.
8. `SELECT ... FOR UPDATE` giải quyết vấn đề gì?
9. Tại sao thiết kế 4 role riêng biệt thay vì 1 admin làm hết?
10. Nếu có thêm thời gian, bạn sẽ cải thiện gì trong hệ thống?

---

## Tóm tắt thứ tự học

```
Giai đoạn 1: Database (schema.sql)          ← nền tảng dữ liệu
    ↓
Giai đoạn 2: Auth & Phân quyền              ← ai được làm gì
    ↓
Giai đoạn 3: Luồng nghiệp vụ (diplomas.js) ← hệ thống hoạt động ra sao
    ↓
Giai đoạn 4: Hashing (recordHash.js)        ← cầu nối off-chain ↔ on-chain
    ↓
Giai đoạn 5: Chaincode                      ← smart contract trên blockchain
    ↓
Giai đoạn 6: Backend ↔ Fabric               ← kết nối 2 thế giới
    ↓
Giai đoạn 7: Public Verify                  ← giá trị cốt lõi của đề tài
    ↓
Giai đoạn 8: Frontend                       ← giao diện người dùng
    ↓
Giai đoạn 9: Network & Deploy               ← hạ tầng blockchain
    ↓
Giai đoạn 10: Tổng hợp & Bảo vệ            ← sẵn sàng trình bày
```

> **Ước tính tổng thời gian**: 12–16 ngày nếu học nghiêm túc 2–3 giờ/ngày.
