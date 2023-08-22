"use client";

import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { errorCatch } from "../functions/ErrorCatch";

export const usePostData = <T>() => {
  const authAxios = useAxiosAuth();

  const fetchData = async (url: string, body: T) => {
    try {
      const response = await authAxios.post(url, body);
      return response.status;
    } catch (error) {
      return errorCatch(error);
    }
  };
  return fetchData;
};
