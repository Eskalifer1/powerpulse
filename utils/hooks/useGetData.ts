"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useApiData } from "./useApiData";

interface FetchResult<T> {
  data: T | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  refetch: any;
}

export const useGetData = <T>(url: string): FetchResult<T> => {
  const { data: session } = useSession();
  const getFunction = useApiData();
  const queryKey = ["data", url];
  const { data, isLoading, isError, isFetching, refetch } = useQuery(
    queryKey,
    async () => {
      const response = await getFunction(url, "GET");
      return response.data;
    },
    {
      enabled: session !== undefined, // Fetch data only when session is available
      retry: 2, // Number of retries on failure
      onError: () => {
        toast.error("Something went wrong");
      },
    }
  );

  return { data, isLoading, isError, isFetching, refetch };
};
