#!/bin/bash

# Script để KHỞI ĐỘNG LẠI Fabric network sau khi tắt máy
# Không xóa data, không deploy lại — chỉ restart containers
# Chạy: cd /home/hoang/khoa-luan/chaincode && bash RESUME.sh

set -e

echo "🔍 Kiểm tra Docker..."
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker chưa chạy. Hãy khởi động Docker trước."
    exit 1
fi

echo ""
echo "🔄 Khởi động lại tất cả containers của Fabric network..."

# Restart tất cả containers liên quan (peer, orderer, CA, chaincode)
CONTAINERS=$(docker ps -aq --filter "network=fabric_test")
if [ -z "$CONTAINERS" ]; then
    echo "⚠️  Không tìm thấy containers nào. Có thể bạn chưa chạy DEPLOY.sh lần đầu."
    echo "   Hãy chạy: bash DEPLOY.sh"
    exit 1
fi

docker start $CONTAINERS

echo ""
echo "⏳ Chờ 5 giây để containers khởi động hoàn tất..."
sleep 5

echo ""
echo "📋 Trạng thái containers:"
docker ps --filter "network=fabric_test" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "✅ HOÀN TẤT! Network đã được khởi động lại (dữ liệu blockchain được giữ nguyên)."
echo "   Peer sẽ tự khởi động lại chaincode container khi có request đầu tiên."
echo ""
echo "🌐 Tiếp theo, khởi động backend:"
echo "   cd /home/hoang/khoa-luan/backend && npm run dev"
