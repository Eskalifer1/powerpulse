"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const AuthProvider: FC<PropsType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
