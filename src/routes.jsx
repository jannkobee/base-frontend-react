import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const AuthRedirect = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <AuthRedirect>
                <Login />
            </AuthRedirect>
        ),
    },
    {
        path: "/register",
        element: (
            <AuthRedirect>
                <Register />
            </AuthRedirect>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
