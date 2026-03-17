import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth({ allowedRoles }) {
    const token = localStorage.getItem("token");
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles?.length) {
        const userStr = localStorage.getItem("user");
        const user = userStr ? JSON.parse(userStr) : null;

        if (!user || !allowedRoles.includes(user.role)) {
            return <Navigate to="/verify" replace />;
        }
    }

    return <Outlet />;
}
