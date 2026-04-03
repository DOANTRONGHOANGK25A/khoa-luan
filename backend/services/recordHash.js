import crypto from "crypto";
import { pool } from "../src/db.js";

export function sha256Hex(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
}

function normStr(x) {
    if (x === null || x === undefined) return "";
    return x.toString().normalize("NFC").trim().replace(/[\r\n]+/g, " ").replace(/\s+/g, " ");
}

/** Định dạng ngày tháng luôn là YYYY-MM-DD */
function normDate(x) {
    if (!x) return "";
    if (x instanceof Date) return x.toISOString().slice(0, 10);
    return x.toString().trim().slice(0, 10);
}

/** Định dạng năm luôn là chuỗi 4 chữ số */
function normYear(x) {
    if (x === null || x === undefined) return "";
    return String(Number(x));
}

/** Định dạng GPA luôn là X.XX (2 chữ số thập phân) */
function normGpa(x) {
    if (x === null || x === undefined) return "";
    return Number(x).toFixed(2);
}


/**
 * Xây dựng văn bản chuẩn hóa (canonical text) mang tính tất định từ các trường thông tin cốt lõi
 * của văn bằng và mã băm SHA-256 của 3 file đính kèm.
 *
 * Thứ tự các trường là CỐ ĐỊNH:
 *   serialNo, studentId, studentName, birthDate, major, ranking,
 *   gpa, graduationYear, portraitSha256, diplomaSha256, transcriptSha256
 *
 * @param {object} fields  – bắt buộc phải chứa đủ 11 khóa (keys)
 * @returns {string} các dòng được nối với nhau bằng ký tự xuống dòng (LF \n)
 */
export function buildCanonicalText(fields) {
    const lines = [
        `serialNo=${normStr(fields.serialNo)}`,
        `studentId=${normStr(fields.studentId)}`,
        `studentName=${normStr(fields.studentName)}`,
        `birthDate=${normDate(fields.birthDate)}`,
        `major=${normStr(fields.major)}`,
        `ranking=${normStr(fields.ranking)}`,
        `gpa=${normGpa(fields.gpa)}`,
        `graduationYear=${normYear(fields.graduationYear)}`,
        `portraitSha256=${fields.portraitSha256 || ""}`,
        `diplomaSha256=${fields.diplomaSha256 || ""}`,
        `transcriptSha256=${fields.transcriptSha256 || ""}`,
    ];
    return lines.join("\n");
}

/** sha256( utf-8( canonicalText ) )  →  trả về chuỗi hex in thường */
export function computeRecordHash(canonicalText) {
    return sha256Hex(Buffer.from(canonicalText, "utf8"));
}

/* ── Điểm vào chính: đọc Database + các files → sinh ra mã băm tổng recordHash ── */

export async function computeRecordHashByDiplomaId(id) {
    const d = await pool.query("SELECT * FROM diplomas WHERE id=$1", [id]);
    const row = d.rows[0];
    if (!row) throw new Error("DIPLOMA_NOT_FOUND");

    const f = await pool.query(
        "SELECT kind, data FROM diploma_files WHERE diploma_id=$1",
        [id]
    );

    const map = new Map(f.rows.map(x => [x.kind, x.data]));
    for (const k of ["PORTRAIT", "DIPLOMA", "TRANSCRIPT"]) {
        if (!map.get(k)) throw new Error(`MISSING_FILE_${k}`);
    }

    const portraitSha256 = sha256Hex(map.get("PORTRAIT"));
    const diplomaSha256 = sha256Hex(map.get("DIPLOMA"));
    const transcriptSha256 = sha256Hex(map.get("TRANSCRIPT"));

    const canonicalText = buildCanonicalText({
        serialNo: row.serial_no,
        studentId: row.student_id,
        studentName: row.student_name,
        birthDate: row.birth_date,
        major: row.major,
        ranking: row.ranking,
        gpa: row.gpa,
        graduationYear: row.graduation_year,
        portraitSha256,
        diplomaSha256,
        transcriptSha256,
    });

    const recordHash = computeRecordHash(canonicalText);
    return { recordHash, canonicalText };
}
