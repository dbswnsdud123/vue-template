import axios from "axios";

// withCredentials: true,
// baseURL: process.env.VUE_APP_API_URL,
export const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
