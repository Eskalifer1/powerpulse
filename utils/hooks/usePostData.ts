"use client";

import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { ResponseError } from "@/types/Response/api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const usePostData = <T>() => {
  const authAxios = useAxiosAuth();

  const fetchData = async (url: string, body: T) => {
    try {
      const response = await authAxios.post(url, body);
      return response.status;
    } catch (e) {
      const error = e as AxiosError<ResponseError>;
      const errorMessage =
        error.response?.data?.message[0] || "An error occurred";
      toast.error(errorMessage);
      return error;
    }
  };
  return fetchData;
};
