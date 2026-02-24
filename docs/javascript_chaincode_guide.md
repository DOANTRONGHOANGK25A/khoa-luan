# HƯỚNG DẪN CHAINCODE JAVASCRIPT (PHIÊN BẢN DỰ ÁN HIỆN TẠI)

## 1. Mục tiêu file này
Tài liệu này mô tả chính xác chaincode đang chạy trong dự án khóa luận tại:
- `chaincode/vanbang-chaincode/index.js`
- `chaincode/vanbang-chaincode/lib/vanbangContract.js`

Không dùng contract mẫu `asset-transfer`.

## 2. Cấu trúc chaincode hiện tại

```text
chaincode/vanbang-chaincode/
├── index.js
├── lib/
│   └── vanbangContract.js
├── package.json
└── README.md
```

`package.json` hiện tại:
- start script: `fabric-chaincode-node start`
- dependencies: `fabric-contract-api`, `fabric-shim`

## 3. Contract và hàm nghiệp vụ

Class contract: `VanBangContract`

Các hàm on-chain:
- `IssueDiploma(ctx, serialNo, jsonRecordString)`
- `ReadDiploma(ctx, serialNo)` (alias của `QueryDiploma`)
- `QueryDiploma(ctx, serialNo)`
- `RevokeDiploma(ctx, serialNo, revokedAt)`

### 3.1 Dữ liệu on-chain khi phát hành
Khi gọi `IssueDiploma`, chaincode ghi object có cấu trúc:

```json
{
  "serialNo": "VB001",
  "studentId": "...",
  "studentName": "...",
  "birthDate": "YYYY-MM-DD",
  "major": "...",
  "ranking": "...",
  "gpa": "...",
  "graduationYear": 2026,
  "recordHash": "64_hex_chars",
  "status": "ISSUED",
  "issuedAt": "ISO_TIME",
  "revokedAt": null,
  "txId": "FABRIC_TX_ID"
}
```

### 3.2 Rule chính của contract
- `serialNo` bắt buộc, không rỗng.
- Không cho phát hành trùng `serialNo` (`ALREADY_EXISTS`).
- `IssueDiploma` bắt buộc đủ field và `recordHash` phải là 64 ký tự hex.
- `RevokeDiploma` chỉ cho phép khi trạng thái hiện tại là `ISSUED`.
- Lỗi chuẩn: `NOT_FOUND`, `ALREADY_EXISTS`, `NOT_ISSUED`, `MISSING_FIELD`, `INVALID_JSON`.

## 4. Cách deploy đang dùng trong dự án

Dự án hiện đang deploy bằng **standard lifecycle** qua script `chaincode/DEPLOY.sh`:

```bash
cd /home/hoang/khoa-luan/chaincode
bash DEPLOY.sh
```

Script thực hiện:
1. `npm install --production` trong `vanbang-chaincode`
2. `./network.sh down`
3. `./network.sh up createChannel -ca`
4. `./network.sh deployCC -ccn vanbang -ccp <chaincode_dir> -ccl javascript`

Lưu ý: hiện tại script này **không** dùng `deployCCAAS`.

## 5. Khởi động lại mạng sau khi tắt máy

```bash
cd /home/hoang/khoa-luan/chaincode
bash RESUME.sh
```

Script sẽ `docker start` toàn bộ container trong network `fabric_test` và giữ nguyên dữ liệu ledger cũ.

## 6. Kiểm tra nhanh chaincode

Sau khi deploy, có thể kiểm tra bằng backend hoặc peer CLI.

### 6.1 Kiểm tra qua backend (khuyến nghị)
- API đọc on-chain: `GET /api/chain/diplomas/:serialNo`
- API verify công khai: `GET /api/public/verify?serialNo=...`

### 6.2 Kiểm tra container
```bash
docker ps | rg "peer|orderer|ca|dev-peer"
```

## 7. Tích hợp backend với chaincode

Backend gọi chaincode qua:
- `backend/services/fabricClient.js`
- `backend/services/fabricDiploma.js`

Các hàm mapping:
- `chainRead` -> `ReadDiploma`
- `chainIssueWithWallet` -> `IssueDiploma`
- `chainRevokeWithWallet` -> `RevokeDiploma`

Luồng phát hành/thu hồi nằm tại:
- `backend/routes/diplomas.js` (`/:id/issue`, `/:id/revoke`)

## 8. Lưu ý khi chỉnh sửa contract

Khi thay đổi logic `lib/vanbangContract.js`:
1. Tăng version chaincode (nếu deploy thủ công lifecycle).
2. Deploy lại chaincode.
3. Kiểm tra tương thích với backend (đặc biệt format `recordHash`, `status`, `issuedAt`, `revokedAt`).
4. Test lại các API: issue/revoke/read/verify.
