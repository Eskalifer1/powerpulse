import axios from "axios";

const authOption = {
  baseURL: "https://powerpulse-ie67.onrender.com/",
  headers: { "Content-Type": "application/json" },
};

export const authInstance = axios.create(authOption);
export const instance = axios.create(authOption);
