# VanBang Chaincode – Quản lý văn bằng trên Hyperledger Fabric

## Mô tả

Smart-contract (chaincode) cho hệ thống quản lý văn bằng, chạy trên Hyperledger Fabric 2.5+.
Chaincode lưu trữ bản ghi văn bằng lên blockchain với các thao tác: **phát hành**, **truy vấn** và **thu hồi**.

## Cấu trúc dự án

```
vanbang-chaincode/
├── index.js                 # Entry point – export danh sách contract
├── lib/
│   └── vanbangContract.js   # Logic nghiệp vụ (VanBangContract)
├── package.json             # Dependencies & scripts
└── README.md                # File này
```

## Yêu cầu

| Thành phần             | Phiên bản      |
| ---------------------- | -------------- |
| Hyperledger Fabric     | 2.5+           |
| Node.js                | 18+            |
| Docker & Docker Compose| Mới nhất       |
| Fabric test-network    | Đang chạy      |

## Các hàm của Contract

### `IssueDiploma(serialNo, jsonRecordString)`

Phát hành văn bằng mới lên blockchain.

| Tham số            | Kiểu     | Mô tả                                                    |
| ------------------ | -------- | --------------------------------------------------------- |
| `serialNo`         | `string` | Số hiệu văn bằng (duy nhất, dùng làm key trên ledger)    |
| `jsonRecordString` | `string` | Chuỗi JSON chứa thông tin văn bằng (xem bên dưới)        |

**Các trường bắt buộc trong `jsonRecordString`:**

| Trường           | Mô tả                                          |
| ---------------- | ----------------------------------------------- |
| `studentId`      | MSSV                                            |
| `studentName`    | Họ tên sinh viên                                |
| `birthDate`      | Ngày sinh                                       |
| `major`          | Ngành học                                       |
| `ranking`        | Xếp loại tốt nghiệp                            |
| `gpa`            | Điểm trung bình                                 |
| `graduationYear` | Năm tốt nghiệp                                 |
| `recordHash`     | SHA-256 hash của bản ghi (64 ký tự hex)         |
| `issuedAt`       | *(tuỳ chọn)* Thời gian phát hành (ISO 8601)    |

**Trả về:** JSON object của văn bằng đã lưu, bao gồm `status: "ISSUED"` và `txId`.

---

### `QueryDiploma(serialNo)` / `ReadDiploma(serialNo)`

Truy vấn thông tin văn bằng theo số hiệu. `ReadDiploma` là alias tương thích ngược.

| Tham số    | Kiểu     | Mô tả               |
| ---------- | -------- | -------------------- |
| `serialNo` | `string` | Số hiệu văn bằng    |

**Trả về:** JSON object của văn bằng.

---

### `RevokeDiploma(serialNo, revokedAt)`

Thu hồi văn bằng đã phát hành.

| Tham số     | Kiểu     | Mô tả                                        |
| ----------- | -------- | --------------------------------------------- |
| `serialNo`  | `string` | Số hiệu văn bằng cần thu hồi                 |
| `revokedAt` | `string` | *(tuỳ chọn)* Thời gian thu hồi (ISO 8601)    |

**Trả về:** JSON object của văn bằng đã cập nhật với `status: "REVOKED"`.

**Lỗi:** Ném lỗi `NOT_FOUND` nếu không tồn tại, `NOT_ISSUED` nếu văn bằng không ở trạng thái ISSUED.

## Cấu trúc dữ liệu trên Ledger

```json
{
  "serialNo": "VB-2026-001",
  "studentId": "20210001",
  "studentName": "Nguyễn Văn A",
  "birthDate": "2000-01-15",
  "major": "Công nghệ thông tin",
  "ranking": "Giỏi",
  "gpa": "3.52",
  "graduationYear": "2026",
  "recordHash": "a1b2c3d4...64 hex chars",
  "status": "ISSUED",
  "issuedAt": "2026-02-07T17:00:00.000Z",
  "revokedAt": null,
  "txId": "abc123..."
}
```

## Deploy Chaincode

### 1. Khởi động Fabric test-network

```bash
cd /home/hoang/khoa-luan/network/fabric-samples/test-network
./network.sh up createChannel -ca
```

### 2. Đóng gói & cài đặt chaincode

```bash
# Deploy chaincode lên channel "mychannel"
./network.sh deployCCAAS -ccn vanbang \
  -ccp ../../../chaincode/vanbang-chaincode
```

> **Ghi chú:** Nếu cần cập nhật chaincode, tăng version:
> ```bash
> ./network.sh deployCCAAS -ccn vanbang \
>   -ccp ../../../chaincode/vanbang-chaincode -ccv 1.1
> ```

## Kiểm tra trạng thái

```bash
# Xem containers chaincode
docker ps | grep vanbang

# Xem logs
docker logs peer0org1_vanbang_ccaas

# Query chaincode definition đã commit
peer lifecycle chaincode querycommitted --channelID mychannel --name vanbang
```

## Dọn dẹp

```bash
# Dừng network & xoá tất cả containers/volumes
cd /home/hoang/khoa-luan/network/fabric-samples/test-network
./network.sh down
```

## Tài liệu tham khảo

- [Hyperledger Fabric – Chaincode for Developers](https://hyperledger-fabric.readthedocs.io/en/latest/chaincode4ade.html)
- [Fabric Test Network](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html)
- [Chaincode as a Service](https://hyperledger-fabric.readthedocs.io/en/latest/cc_service.html)
