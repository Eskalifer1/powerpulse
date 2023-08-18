import { AuthService } from "@/services/Auth";
import { ErrorsJwt } from "@/utils/enum/jwtErrors";
import { errorCatch } from "@/utils/functions/ErrorCatch";
import axios from "axios";
import { getAccessToken, removeFromStorage } from "./tokensManage";

const authOption = {
  baseURL: "https://some-domain.com/api/",
  headers: { "Content-Type": "application/json" },
};

export const authInstance = axios.create(authOption);
export const instance = axios.create(authOption);

authInstance.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

authInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    if (
      error?.response?.status === 401 ||
      errorCatch(error) === ErrorsJwt.EXPIRED ||
      (errorCatch(error) === ErrorsJwt.PROVIDED &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === ErrorsJwt.EXPIRED) removeFromStorage();
      }
    }
  }
);
