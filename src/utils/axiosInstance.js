import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; 


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

// Request interceptor to add Authorization header with token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // ambil token dari localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response){
            if(error.response.status === 401) {
                console.error("Unauthorized access - redirecting to login");
                window.location.href = "/login";
            }else if(error.response.status === 500) {
                console.error("Server error - please try again later");
            }
        }else if (error.code === 'ECONNABORTED') {
            console.error("Request timeout - please check your network connection");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
