# Network Docs

## 1. Phạm vi
Mạng cục bộ sử dụng `network/fabric-samples/test-network`.

## 2. Thành phần
- 2 peer org (`Org1`, `Org2`)
- 1 orderer
- Fabric CA (khi chạy với `-ca`)
- Channel chính: `mychannel`

## 3. Script quan trọng
- `network/install-fabric.sh`
- `network/fabric-samples/test-network/network.sh`
- `chaincode/DEPLOY.sh`
- `chaincode/RESUME.sh`

## 4. Luồng dựng mạng của dự án
```bash
cd chaincode
bash DEPLOY.sh
```

Tương đương:
```bash
cd network/fabric-samples/test-network
./network.sh down
./network.sh up createChannel -ca
./network.sh deployCC -ccn vanbang -ccp /home/hoang/khoa-luan/chaincode/vanbang-chaincode -ccl javascript
```

## 5. Cert path backend dùng
Trong `backend/.env`:
- `FABRIC_TLS_CERT_PATH`
- `FABRIC_CERT_PATH`
- `FABRIC_KEY_DIR`
- `FABRIC_CA_TLS_CERT_PATH`

## 6. Kiểm tra trạng thái
```bash
docker ps --filter "network=fabric_test"
```

## 7. Lưu ý
- `network.sh down` có thể làm mất dữ liệu ledger tùy volume.
- `RESUME.sh` dùng lại container cũ sau reboot.
