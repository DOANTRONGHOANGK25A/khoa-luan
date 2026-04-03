"use strict";

const { Contract } = require("fabric-contract-api");

function ensureSerial(serialNo) {
    if (!serialNo || typeof serialNo !== "string") throw new Error("serialNo required");
    return serialNo.trim();
}

function ensureIsoTime(t) {
    if (!t) return new Date().toISOString();
    return t.toString();
}

class VanBangContract extends Contract {

    async QueryDiploma(ctx, serialNo) {
        serialNo = ensureSerial(serialNo);

        const data = await ctx.stub.getState(serialNo);
        if (!data || data.length === 0) throw new Error("NOT_FOUND");

        return data.toString();
    }

    async IssueDiploma(ctx, serialNo, jsonRecordString) {
        serialNo = ensureSerial(serialNo);

        // Kiểm tra xem văn bằng đã tồn tại chưa
        const exists = await ctx.stub.getState(serialNo);
        if (exists && exists.length > 0) throw new Error("ALREADY_EXISTS");

        // Phân tích dữ liệu JSON đầu vào
        let input;
        try {
            input = JSON.parse(jsonRecordString);
        } catch (e) {
            throw new Error("INVALID_JSON: " + e.message);
        }


        const requiredFields = ["studentId", "studentName", "birthDate", "major", "ranking", "gpa", "graduationYear", "recordHash"];
        for (const field of requiredFields) {
            if (input[field] === undefined || input[field] === null || input[field] === "") {
                throw new Error(`MISSING_FIELD: ${field}`);
            }
        }

        const recordHash = input.recordHash.trim().toLowerCase();
        if (!/^[0-9a-f]{64}$/.test(recordHash)) {
            throw new Error("recordHash must be 64 hex chars");
        }

        const txId = ctx.stub.getTxID();
        const issuedAt = ensureIsoTime(input.issuedAt);

        // Tạo đối tượng hoàn chỉnh để lưu trữ trên blockchain với tất cả các thông tin bắt buộc
        const obj = {
            serialNo,
            studentId: input.studentId,
            studentName: input.studentName,
            birthDate: input.birthDate,
            major: input.major,
            ranking: input.ranking,
            gpa: input.gpa,
            graduationYear: input.graduationYear,
            recordHash,
            status: "ISSUED",
            issuedAt,
            revokedAt: null,
            txId
        };

        await ctx.stub.putState(serialNo, Buffer.from(JSON.stringify(obj)));
        return JSON.stringify(obj);
    }

    async RevokeDiploma(ctx, serialNo, revokedAt) {
        serialNo = ensureSerial(serialNo);
        revokedAt = ensureIsoTime(revokedAt);

        const data = await ctx.stub.getState(serialNo);
        if (!data || data.length === 0) throw new Error("NOT_FOUND");

        const obj = JSON.parse(data.toString());
        if (obj.status !== "ISSUED") throw new Error("NOT_ISSUED");

        const txId = ctx.stub.getTxID();

        obj.status = "REVOKED";
        obj.revokedAt = revokedAt;
        obj.txId = txId;

        await ctx.stub.putState(serialNo, Buffer.from(JSON.stringify(obj)));
        return JSON.stringify(obj);
    }
}

module.exports = { VanBangContract };
