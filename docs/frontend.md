# Frontend Docs

## 1. Mục tiêu
Frontend là SPA phục vụ tra cứu công khai và thao tác nghiệp vụ theo role.

## 2. Công nghệ
- React `^19.2.0`
- Vite `^7.2.4`
- Ant Design `^6.2.0`
- React Router DOM `^7.13.0`
- Axios `^1.13.4`

## 3. Cấu trúc chính
- `frontend/src/router/index.jsx`: route map.
- `frontend/src/layouts/MainLayout.jsx`: layout chính.
- `frontend/src/components/RequireAuth.jsx`: guard đăng nhập.
- `frontend/src/api/api.js`: axios + interceptor 401.
- `frontend/src/api/diplomas.js`: API nội bộ.
- `frontend/src/api/public.js`: API công khai.
- `frontend/src/pages/*.jsx`: các màn hình.

## 4. Routing
Public:
- `/verify`
- `/login`

Auth required:
- `/diplomas`
- `/diplomas/:id`
- `/create`
- `/my-diplomas`
- `/approval`
- `/issuance`
- `/admin`

## 5. Menu theo role
- `ADMIN`: `verify`, `diplomas`, `admin`
- `STAFF`: `verify`, `diplomas`, `create`, `my-diplomas`
- `MANAGER`: `verify`, `diplomas`, `approval`
- `ISSUER`: `verify`, `diplomas`, `issuance`

## 6. Màn hình chính
- `LoginPage`
- `VerifyPage`
- `DiplomaListPage`
- `DiplomaCreatePage`
- `DiplomaDetailPage`
- `StaffDashboardPage`
- `ApprovalPage`
- `IssuancePage`
- `AdminUsersPage`

## 7. Token và API
- Token lưu ở `localStorage`.
- Request tự gắn `Authorization`.
- Nếu `401`, frontend xóa token và chuyển `/login`.

## 8. Chạy frontend
```bash
cd frontend
npm install
npm run dev
```

## 9. Proxy dev
`frontend/vite.config.js`:
- `/api` -> `http://localhost:3001`
