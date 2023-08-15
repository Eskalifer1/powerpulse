"use client";

import { SizeType } from "@/types/SizeType";
import { DefaultButton } from "@/uiKit/button/style";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  $size: SizeType;
}

export const GoToMainButton: FC<PropsType> = ({ children, $size }) => {
  const router = useRouter();

  return (
    <DefaultButton
      onClick={() => router.push("/")}
      $marginTop="1.25rem"
      $type="primary"
      $size={$size}
    >
      {children}
    </DefaultButton>
  );
};
