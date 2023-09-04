import axios from "axios";

const authOption = {
  baseURL: "https://alive-blue-narwhal.cyclic.app/",
  headers: { "Content-Type": "application/json" },
};

export const authInstance = axios.create(authOption);
export const instance = axios.create(authOption);
