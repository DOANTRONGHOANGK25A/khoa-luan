DROP TABLE IF EXISTS chain_logs;
DROP TABLE IF EXISTS approval_logs;
DROP TABLE IF EXISTS diploma_files;
DROP TABLE IF EXISTS diplomas;
DROP TABLE IF EXISTS users;

-- 1) Users
CREATE TABLE users (
  id            BIGSERIAL PRIMARY KEY,
  username      TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL CHECK (role IN ('ADMIN','STAFF','MANAGER','ISSUER')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2) Diplomas (off-chain)
CREATE TABLE diplomas (
  id              BIGSERIAL PRIMARY KEY,

  serial_no       TEXT NOT NULL UNIQUE,
  student_id      TEXT NOT NULL,
  student_name    TEXT NOT NULL,
  birth_date      DATE,
  major           TEXT,
  ranking         TEXT,
  gpa             TEXT,
  graduation_year INT,

  status          TEXT NOT NULL DEFAULT 'PENDING'
                 CHECK (status IN ('PENDING','APPROVED','REJECTED','ISSUED','REVOKED')),

  created_by      BIGINT REFERENCES users(id),
  approved_by     BIGINT REFERENCES users(id),
  issued_by       BIGINT REFERENCES users(id),
  revoked_by      BIGINT REFERENCES users(id),

  approved_at     TIMESTAMPTZ,
  issued_at       TIMESTAMPTZ,
  revoked_at      TIMESTAMPTZ,

  rejected_reason TEXT,
  rejected_role   VARCHAR(20),
  rejected_at     TIMESTAMPTZ,

  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_diplomas_student_id ON diplomas(student_id);
CREATE INDEX idx_diplomas_student_name ON diplomas (lower(student_name));

-- Tự cập nhật updated_at khi UPDATE diplomas
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_diplomas_updated_at
BEFORE UPDATE ON diplomas
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- 3) Files (BYTEA)
CREATE TABLE diploma_files (
  id          BIGSERIAL PRIMARY KEY,
  diploma_id  BIGINT NOT NULL REFERENCES diplomas(id) ON DELETE CASCADE,

  kind        TEXT NOT NULL CHECK (kind IN ('PORTRAIT','DIPLOMA','TRANSCRIPT')),
  filename    TEXT,
  mime_type   TEXT,
  size_bytes  INT,
  data        BYTEA NOT NULL,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  UNIQUE (diploma_id, kind)
);

CREATE INDEX idx_files_diploma ON diploma_files(diploma_id);

-- 4) Approval logs (append-only)
CREATE TABLE approval_logs (
  id          BIGSERIAL PRIMARY KEY,
  diploma_id  BIGINT NOT NULL REFERENCES diplomas(id) ON DELETE CASCADE,
  actor_id    BIGINT REFERENCES users(id),

  action      TEXT NOT NULL CHECK (action IN ('APPROVE','REJECT')),
  note        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_approval_diploma ON approval_logs(diploma_id, created_at);

-- 5) Chain logs (append-only)
CREATE TABLE chain_logs (
  id             BIGSERIAL PRIMARY KEY,
  diploma_id     BIGINT NOT NULL REFERENCES diplomas(id) ON DELETE CASCADE,
  actor_id       BIGINT REFERENCES users(id),

  action         TEXT NOT NULL CHECK (action IN ('ISSUE','REVOKE')),
  tx_id          TEXT UNIQUE,
  record_hash    TEXT NOT NULL
                CHECK (record_hash ~ '^[0-9a-f]{64}$'),
  onchain_status TEXT NOT NULL CHECK (onchain_status IN ('ISSUED','REVOKED')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_chain_diploma ON chain_logs(diploma_id, created_at);

-- Seed users (mật khẩu mặc định: 123456)
INSERT INTO users (username, password_hash, role)
VALUES
  ('admin',       '$2b$12$YgKhuefh2FSRegI1wE62ZOdyxz0SKQgoiGbR/BdWZv64pgbcjMKNy', 'ADMIN'),
  ('nhanvien1',   '$2b$12$YgKhuefh2FSRegI1wE62ZOdyxz0SKQgoiGbR/BdWZv64pgbcjMKNy', 'STAFF'),
  ('truongphong', '$2b$12$YgKhuefh2FSRegI1wE62ZOdyxz0SKQgoiGbR/BdWZv64pgbcjMKNy', 'MANAGER'),
  ('hieutruong',  '$2b$12$YgKhuefh2FSRegI1wE62ZOdyxz0SKQgoiGbR/BdWZv64pgbcjMKNy', 'ISSUER')
ON CONFLICT (username) DO NOTHING;
-- Tất cả tài khoản mật khẩu: 123456
