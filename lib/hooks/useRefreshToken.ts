"use client";

import { instance } from "@/apiFolder/instance";
import { signIn, signOut, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { update } = useSession();

  const getNewPair = async (session: any) => {
    const response = await instance.post(
      "auth/login/access-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user.refreshToken}`,
        },
      }
    );
    if (response.status === 401) {
      console.log(response);
      console.log("login again");
      signOut();
    }
    if (session) {
      await update({
        ...session,
        user: {
          ...session?.user,
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
        },
      });
    } else signIn();

    return response;
  };

  return getNewPair;
};
