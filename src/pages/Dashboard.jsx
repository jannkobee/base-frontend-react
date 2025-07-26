import { useEffect, useState, useCallback } from "react";
import { Flex, Button } from "antd";
import axios from "../plugins/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    const fetchDashboardData = useCallback(async () => {
        try {
            const response = await axios.get('/auth/auth-user');
            setAuth(response.data);
            console.log('Logged in', response.data);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
    }, []);

    const logout = async () => {
        try {
            await axios.post('/auth/logout');
            localStorage.removeItem('token');
            setAuth(null);
            navigate('/login');
            console.log("Logged out");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, [fetchDashboardData]);

    return (
        <Flex justify="center" align="center" vertical>
            <h1>Dashboard</h1>
            {auth && (
                <div>
                    <p>Welcome, {auth.first_name || "User"}!</p>
                </div>
            )}
            <Button onClick={logout}>Logout</Button>
        </Flex>
    );
};

export default Dashboard;
