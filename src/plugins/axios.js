// /plugins/axios.js
import axios from "axios";

const api = "http://localhost:8000/backend/api/v1"; // replace with your actual API base URL

// Create Axios instance
const axiosRequest = axios.create({
  baseURL: api, // replace with your actual base URL
  withCredentials: true, // if you need to send cookies with requests
  headers: {
    Accept: "application/json",
  },
});

// Request Interceptor
axiosRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or use cookies or a store

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Optional: redirect to login or refresh token
        console.warn("Unauthorized! Redirecting...");
        // window.location.href = '/login';
      }

      if (status >= 500) {
        console.error("Server error:", error.response.data);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosRequest;
