# Chaincode Docs

## 1. Phạm vi
Chaincode của dự án nằm tại `chaincode/vanbang-chaincode`, contract `VanBangContract`.

## 2. Hàm contract
- `IssueDiploma(ctx, serialNo, jsonRecordString)`
- `ReadDiploma(ctx, serialNo)`
- `QueryDiploma(ctx, serialNo)`
- `RevokeDiploma(ctx, serialNo, revokedAt)`

## 3. Rule on-chain
`IssueDiploma`:
- Không cho trùng `serialNo`
- Bắt buộc đủ field
- `recordHash` phải là hex 64 ký tự
- Ghi trạng thái `ISSUED`

`RevokeDiploma`:
- Chỉ thu hồi khi đang `ISSUED`
- Cập nhật `REVOKED` + `revokedAt`

## 4. Dữ liệu on-chain
Field chính:
- `serialNo`, `studentId`, `studentName`, `birthDate`, `major`, `ranking`, `gpa`, `graduationYear`
- `recordHash`
- `status`
- `issuedAt`, `revokedAt`, `txId`

## 5. Deploy theo script dự án
```bash
cd chaincode
bash DEPLOY.sh
```

Script thực hiện:
1. Cài dependency chaincode
2. `network.sh down`
3. `network.sh up createChannel -ca`
4. `network.sh deployCC -ccn vanbang -ccp <path> -ccl javascript`

## 6. Resume network
```bash
cd chaincode
bash RESUME.sh
```

## 7. Kiểm tra nhanh
Qua backend:
- `GET /api/chain/diplomas/:serialNo`
- `GET /api/public/verify?serialNo=...`

Qua Docker:
```bash
docker ps | rg "peer|orderer|ca|dev-peer"
```

## 8. Thành phần backend liên quan
- `backend/services/fabricClient.js`
- `backend/services/fabricDiploma.js`
- `backend/routes/diplomas.js`
- `backend/routes/chain.js`
