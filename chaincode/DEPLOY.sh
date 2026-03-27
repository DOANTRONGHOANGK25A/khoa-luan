#!/bin/bash

set -e

NETWORK_DIR="/home/hoang/khoa-luan/network/fabric-samples/test-network"
CHAINCODE_DIR="/home/hoang/khoa-luan/chaincode/vanbang-chaincode"

CC_NAME="vanbang"

echo "Bước 0: Install chaincode dependencies..."
cd "$CHAINCODE_DIR"
#npm install --production
cd "$NETWORK_DIR"

echo ""
echo "Bước 1: Dọn dẹp network cũ..."
./network.sh down

echo ""
echo "Bước 2: Khởi động network + tạo channel (có CA)..."
./network.sh up createChannel -ca

echo ""
echo "Bước 3: Deploy chaincode 'vanbang' (standard lifecycle)..."
./network.sh deployCC -ccn "$CC_NAME" -ccp "$CHAINCODE_DIR" -ccl javascript

echo ""
echo "HOÀN TẤT! Fabric network đang chạy + chaincode 'vanbang' đã deploy."
echo ""
echo "Kiểm tra nhanh:"
echo "   docker ps | grep dev-peer"
