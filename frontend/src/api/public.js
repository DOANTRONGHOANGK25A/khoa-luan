import api from "./api";

export async function searchDiplomas(type, value) {
    const res = await api.get("/public/search", { params: { type, value } });
    return res.data;
}

export async function verifyOnChain(serialNo) {
    const res = await api.get("/public/verify", { params: { serialNo } });
    return res.data;
}

export async function downloadPublicDiplomaFile(diplomaId, kind) {
    const res = await api.get(`/public/diplomas/${diplomaId}/files/${kind}`, {
        responseType: "blob",
    });
    return res.data;
}
