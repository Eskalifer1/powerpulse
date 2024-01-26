"use client";

import { instance } from "@/apiFolder/instance";
import { ResponseError } from "@/types/Response/api";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type MethodType = "GET" | "POST" | "DELETE" | "PATCH";

export const useApiData = () => {
  const { data: session } = useSession();

  const fetchData = async <T>(url: string, method: MethodType, payload?: T) => {
    try {
      const response = await instance.request({
        data: payload,
        method,
        url,
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      });

      return response;
    } catch (e) {
      const error = e as AxiosError<ResponseError>;
      const errorMessage = "An error occurred";
      toast.error(errorMessage);
      throw error;
    }
  };

  return fetchData;
};
