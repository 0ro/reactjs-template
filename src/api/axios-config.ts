import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || "http://localhost:3000",
  withCredentials: true,
});

export default axiosConfig;
