# Backend Docs

## 1. Mục tiêu
Backend cung cấp REST API cho quản lý hồ sơ văn bằng, xác thực, phân quyền, tích hợp PostgreSQL và Hyperledger Fabric.

## 2. Công nghệ
- Node.js (ESM)
- Express `^5.2.1`
- PostgreSQL (`pg ^8.18.0`)
- `bcrypt ^6.0.0`
- `multer ^2.0.2`
- `@hyperledger/fabric-gateway ^1.10.1`
- `fabric-ca-client ^2.2.20`

## 3. Cấu trúc chính
- `backend/src/server.js`: khởi động API.
- `backend/src/app.js`: mount route và error handler.
- `backend/src/db.js`: PostgreSQL pool.
- `backend/src/sessionStore.js`: session token in-memory.
- `backend/middlewares/auth.js`: `requireAuth`.
- `backend/middlewares/role.js`: `requireRole`.
- `backend/routes/*.js`: endpoint nghiệp vụ.
- `backend/services/fabricClient.js`: kết nối gateway Fabric.
- `backend/services/fabricDiploma.js`: gọi chaincode.
- `backend/services/recordHash.js`: canonical text + SHA-256.
- `backend/schema.sql`: schema + seed data.

## 4. Auth và role
- Auth: `Authorization: Bearer <token>`.
- Session: lưu trong `Map`, TTL qua `SESSION_TTL_MINUTES` (mặc định 480).
- Role hợp lệ: `ADMIN`, `STAFF`, `MANAGER`, `ISSUER`.

## 5. Cơ sở dữ liệu
Bảng chính:
- `users`
- `diplomas`
- `diploma_files`
- `approval_logs`
- `chain_logs`

Trạng thái hồ sơ:
- `PENDING`, `APPROVED`, `REJECTED`, `ISSUED`, `REVOKED`

## 6. API map

### 6.1 Auth/User
- `POST /api/auth/login`
- `GET /api/auth/me`
- `PUT /api/auth/change-password`
- `POST /api/auth/logout`
- `GET /api/users` (ADMIN)
- `POST /api/users` (ADMIN)

### 6.2 Diploma workflow
- `POST /api/diplomas` (STAFF)
- `PUT /api/diplomas/:id` (STAFF, chỉ `PENDING/REJECTED`)
- `GET /api/diplomas`
- `GET /api/diplomas/:id`
- `GET /api/diplomas/:id/files/:kind`
- `POST /api/diplomas/:id/approve` (MANAGER)
- `POST /api/diplomas/:id/reject` (MANAGER)
- `POST /api/diplomas/:id/resubmit` (STAFF)
- `POST /api/diplomas/:id/issue` (ISSUER, upload wallet)
- `POST /api/diplomas/:id/revoke` (ISSUER, upload wallet)
- `POST /api/diplomas/:id/reject-issue` (ISSUER)
- `GET /api/diplomas/:id/approval-logs`
- `GET /api/diplomas/:id/chain-logs`
- `GET /api/diplomas/:id/recordhash`

### 6.3 Public/Chain/Issuer
- `GET /api/public/search`
- `GET /api/public/verify`
- `GET /api/public/diplomas/:id/files/:kind`
- `GET /api/chain/diplomas/:serialNo`
- `POST /api/issuer/wallet` (ISSUER)

## 7. Hash verification
`recordHash` được tạo từ:
- Dữ liệu chuẩn hóa của diploma
- SHA-256 của 3 file: `PORTRAIT`, `DIPLOMA`, `TRANSCRIPT`

## 8. Chạy backend
```bash
cd backend
npm install
npm run dev
```

## 9. Biến môi trường chính
- `DATABASE_URL`
- `SESSION_TTL_MINUTES`
- `FABRIC_CHANNEL`, `FABRIC_CHAINCODE`
- `FABRIC_MSPID`, `FABRIC_PEER_ENDPOINT`, `FABRIC_PEER_HOST_ALIAS`
- `FABRIC_TLS_CERT_PATH`, `FABRIC_CERT_PATH`, `FABRIC_KEY_DIR`
- `FABRIC_CA_URL`, `FABRIC_CA_*`
