import { authInstance } from "@/apiFolder/instance";
import { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    if (session !== undefined) {
      const requestIntercept = authInstance.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers.Authorization = `Bearer ${session?.user?.accessToken}`;
          }
          return config;
        },
        (error: AxiosError) => Promise.reject(error)
      );

      const responseIntercept = authInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            await refreshToken(session);
            prevRequest.headers.Authorization = `Bearer ${session?.user.accessToken}`;
            return authInstance(prevRequest);
          }
          return Promise.reject(error);
        }
      );

      return () => {
        authInstance.interceptors.request.eject(requestIntercept);
        authInstance.interceptors.response.eject(responseIntercept);
      };
    }
  }, [session, refreshToken]);

  return authInstance;
};

export default useAxiosAuth;
