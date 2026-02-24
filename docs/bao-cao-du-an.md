# BÁO CÁO DỰ ÁN KHÓA LUẬN

## Hệ thống Quản lý và Xác thực Văn bằng số tích hợp Hyperledger Fabric

## 1. Mục tiêu
Tài liệu này là trang tổng hợp để điều hướng sang bộ tài liệu chi tiết trong `docs/`.

## 2. Tài liệu theo 4 thư mục chính
- `docs/backend.md`: backend API, DB, auth, hash verification.
- `docs/frontend.md`: routing, role UI, màn hình chức năng.
- `docs/chaincode.md`: contract on-chain, deploy, kiểm tra.
- `docs/network.md`: test-network Fabric, script và cert path.

## 3. Tài liệu vận hành hỗ trợ
- `docs/runbook.md`: xử lý sự cố nhanh.
- `docs/sequence-flows.md`: sequence các luồng nghiệp vụ chính.
- `docs/javascript_chaincode_guide.md`: hướng dẫn chaincode JS theo hiện trạng dự án.

## 4. Snapshot dự án
- Monorepo gồm: `backend/`, `frontend/`, `chaincode/`, `network/`, `docs/`.
- Off-chain: PostgreSQL (`qlvanbang`).
- On-chain: chaincode `vanbang` trên channel `mychannel`.
- Public verify: `/verify`, có đối soát hash off-chain và on-chain.

## 5. Chạy nhanh hệ thống
1. Dựng Fabric + deploy chaincode:
```bash
cd chaincode
bash DEPLOY.sh
```
2. Chạy backend:
```bash
cd backend
npm install
npm run dev
```
3. Chạy frontend:
```bash
cd frontend
npm install
npm run dev
```
4. Khởi động lại network sau khi reboot:
```bash
cd chaincode
bash RESUME.sh
```
