import axios from "axios";
import { config } from "process";

const axiosInstance = axios.create({
  baseURL: "https://cars-akash.vercel.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
