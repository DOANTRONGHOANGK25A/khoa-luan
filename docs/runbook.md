# Runbook Sự Cố Nhanh

## 1. Backend không lên
Dấu hiệu:
- Không truy cập được `http://localhost:3001/api/health`

Kiểm tra:
1. `cd backend && npm run dev`
2. Kiểm tra `.env` và `DATABASE_URL`
3. Kiểm tra PostgreSQL đang chạy

## 2. Frontend bị trả về login liên tục
Dấu hiệu:
- Redirect `/login` sau khi thao tác

Kiểm tra:
1. Đăng nhập lại để lấy token mới
2. Kiểm tra Authorization header
3. Xác nhận backend không vừa restart (session in-memory)

## 3. Lỗi PostgreSQL
Dấu hiệu:
- API 500, log lỗi kết nối DB

Kiểm tra:
1. `DATABASE_URL` đúng
2. DB `qlvanbang` tồn tại
3. Đã import schema:
```bash
psql -U postgres -d qlvanbang -f backend/schema.sql
```

## 4. Verify không đọc được on-chain
Dấu hiệu:
- `onchain.exists = false`

Kiểm tra:
1. Fabric network đang chạy
2. Chaincode `vanbang` đã deploy
3. `.env` path cert/key/tls đúng

## 5. Không tạo được wallet
Dấu hiệu:
- `POST /api/issuer/wallet` trả 500/503

Kiểm tra:
1. Fabric CA chạy tại `localhost:7054`
2. `FABRIC_CA_URL`, `FABRIC_CA_REGISTRAR_ID`, `FABRIC_CA_REGISTRAR_SECRET`
3. Nếu verify TLS bật, `FABRIC_CA_TLS_CERT_PATH` phải tồn tại

## 6. Issue/Revoke lỗi wallet
Dấu hiệu:
- API báo wallet không hợp lệ

Kiểm tra file upload:
- Là JSON
- Có đủ `mspId`, `certificate`, `privateKey`

## 7. Mạng Fabric chết sau reboot
Khôi phục nhanh:
```bash
cd chaincode
bash RESUME.sh
```

Nếu không có container cũ:
```bash
cd chaincode
bash DEPLOY.sh
```
