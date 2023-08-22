"use client";

import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface FetchResult<T> {
  data: T | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

export const useGetData = <T>(url: string): FetchResult<T> => {
  const { data: session } = useSession();
  const authAxios = useAxiosAuth();
  const fetchData = async () => {
    const response = await authAxios.get(url);
    return response.data;
  };
  const queryKey = ["data", url];
  const { data, isLoading, isError, isFetching } = useQuery(
    queryKey,
    fetchData,
    {
      enabled: session !== undefined, // Fetch data only when session is available
      retry: 2, // Number of retries on failure
      onError: () => {
        toast.error("Something went wrong");
      },
    }
  );

  return { data, isLoading, isError, isFetching };
};

// export const useGetData = (url: string) => {
//   const { data: session } = useSession();
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const authAxios = useAxiosAuth();

//   async function fetchData() {
//     try {
//       const response = await authAxios.get(url);
//       setData(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError("An error occurred while fetching data.");
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     if (session) fetchData();
//   }, [url, session]);

//   return { data, loading, error };
// };

// interface FetchResult<T> {
//   data: T | undefined;
//   isError: boolean;
//   isLoading: boolean;
//   isFetching: boolean;
// }

// function useGetData<T>(url: string): FetchResult<T> {
//   const queryKey = ["data", url];
//   const queryFn = async () => {
//     const axiosAuth = useAxiosAuth();
//     try {
//       const response = await axiosAuth.get(url);
//       return response.data;
//     } catch (error) {
//       throw new Error("Network response was not ok");
//     }
//   };

//   const { data, isError, isLoading, isFetching } = useQuery(queryKey, queryFn);

//   return {
//     data,
//     isError,
//     isLoading,
//     isFetching,
//   };
// }

// export default useGetData;
