#!/bin/bash
set -e

# Org1 and Org2 Chaincode ID retrieved from peer logs
CC_ID="vanbang_1.0:1ca2729d38fe5c1724478ac51eea4467ab4f4819e8ebe3749432142faf5f8f78"
IMAGE_NAME="vanbang_ccaas_image:latest"

echo "🔧 Restoring Chaincode Containers for: $CC_ID"

# Remove existing if any (just in case of stopped/zombie)
docker rm -f peer0org1_vanbang_ccaas peer0org2_vanbang_ccaas 2>/dev/null || true

# Org1
echo "🚀 Starting peer0org1_vanbang_ccaas..."
docker run --rm -d --name peer0org1_vanbang_ccaas \
  --network fabric_test \
  -e CHAINCODE_SERVER_ADDRESS=0.0.0.0:9999 \
  -e CHAINCODE_ID=$CC_ID \
  -e CORE_CHAINCODE_ID_NAME=$CC_ID \
  $IMAGE_NAME

# Org2
echo "🚀 Starting peer0org2_vanbang_ccaas..."
docker run --rm -d --name peer0org2_vanbang_ccaas \
  --network fabric_test \
  -e CHAINCODE_SERVER_ADDRESS=0.0.0.0:9999 \
  -e CHAINCODE_ID=$CC_ID \
  -e CORE_CHAINCODE_ID_NAME=$CC_ID \
  $IMAGE_NAME

echo "✅ Chaincode containers restored!"
echo "⏳ Waiting for peers to reconnect..."
sleep 5
echo "🔍 Checking status:"
docker ps --filter "name=ccaas"
