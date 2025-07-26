import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../plugins/axios";

export const useLogin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loginAccount = async (payload) => {
    setData(payload);

    try {
      const response = await axios.post("/auth/login", payload);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }

      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    console.log("Data updated:", data);
    return () => {
      console.log("Component unmounted");
    };
  }, [data]);

  return { loginAccount };
};
