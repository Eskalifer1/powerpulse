import axios from "axios";

const authOption = {
  baseURL: "https://calm-brushlands-74974-1c19b90990cc.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
};

export const authInstance = axios.create(authOption);
export const instance = axios.create(authOption);
