import fs from "fs";
import { Router } from "express";
import FabricCAServices from "fabric-ca-client";
import { User } from "fabric-common";
import { requireAuth } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/role.js";

const router = Router();


router.post("/wallet", requireAuth, requireRole("RECTOR"), async (req, res, next) => {
    try {
        // 1) Đọc cấu hình Fabric CA từ biến môi trường
        const caConfig = {
            url:             process.env.FABRIC_CA_URL,
            name:            process.env.FABRIC_CA_NAME || undefined,
            registrarId:     process.env.FABRIC_CA_REGISTRAR_ID,
            registrarSecret: process.env.FABRIC_CA_REGISTRAR_SECRET,
            affiliation:     process.env.FABRIC_CA_AFFILIATION || "org1.department1",
            mspId:           process.env.FABRIC_MSPID || "Org1MSP",
            verify:          process.env.FABRIC_CA_VERIFY !== "false", // mặc định verify=true
            tlsCertPath:     process.env.FABRIC_CA_TLS_CERT_PATH,
        };

        // Validate env
        if (!caConfig.url || !caConfig.registrarId || !caConfig.registrarSecret) {
            return res.status(500).json({
                ok: false,
                message: "Thiếu env: FABRIC_CA_URL, FABRIC_CA_REGISTRAR_ID, FABRIC_CA_REGISTRAR_SECRET"
            });
        }

        // 2) TLS options
        let tlsOptions = { verify: false };
        if (caConfig.verify && caConfig.tlsCertPath) {
            if (!fs.existsSync(caConfig.tlsCertPath)) {
                return res.status(500).json({
                    ok: false,
                    message: `FABRIC_CA_TLS_CERT_PATH không tồn tại: ${caConfig.tlsCertPath}`
                });
            }
            const caCert = fs.readFileSync(caConfig.tlsCertPath, "utf8");
            tlsOptions = { trustedRoots: [caCert], verify: true };
        }

        // 3) Tạo CA client
        let caClient;
        try {
            caClient = new FabricCAServices(caConfig.url, { trustedRoots: tlsOptions.trustedRoots || [], verify: tlsOptions.verify }, caConfig.name);
        } catch (e) {
            return res.status(503).json({
                ok: false,
                message: `Không thể khởi tạo CA client: ${e.message}`
            });
        }

        // 4) Enroll registrar (admin)
        let adminEnrollment;
        try {
            adminEnrollment = await caClient.enroll({
                enrollmentID: caConfig.registrarId,
                enrollmentSecret: caConfig.registrarSecret
            });
        } catch (e) {
            return res.status(503).json({
                ok: false,
                message: `Không thể enroll registrar. CA có đang chạy không? Lỗi: ${e.message}`
            });
        }

        // 5) Tạo admin user object để register user mới
        const adminUser = new User(caConfig.registrarId);
        await adminUser.setEnrollment(
            adminEnrollment.key,
            adminEnrollment.certificate,
            caConfig.mspId
        );

        // 6) Register user mới
        const enrollmentID = `rector_${Date.now()}`;
        let enrollmentSecret;
        try {
            enrollmentSecret = await caClient.register(
                {
                    enrollmentID: enrollmentID,
                    affiliation: caConfig.affiliation,
                    role: "client"
                },
                adminUser
            );
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: `Không thể register user mới: ${e.message}`
            });
        }

        // 7) Enroll user mới
        let rectorEnrollment;
        try {
            rectorEnrollment = await caClient.enroll({
                enrollmentID: enrollmentID,
                enrollmentSecret: enrollmentSecret
            });
        } catch (e) {
            return res.status(500).json({
                ok: false,
                message: `Không thể enroll user mới: ${e.message}`
            });
        }

        // 8) Lấy certificate và private key
        const certificate = rectorEnrollment.certificate;
        const privateKey = rectorEnrollment.key.toBytes();

        // 9) Build wallet object
        const wallet = {
            mspId: caConfig.mspId,
            certificate: certificate,
            privateKey: privateKey
        };

        // 10) Response download
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Content-Disposition", 'attachment; filename="wallet.json"');
        res.send(JSON.stringify(wallet, null, 2));

    } catch (e) {
        console.error("Error creating wallet:", e);
        next(e);
    }
});

export default router;
