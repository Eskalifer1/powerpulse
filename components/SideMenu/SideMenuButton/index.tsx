"use client";

import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { SideMenuButton } from "./style";

interface PropsType {
  children: ReactNode;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SideMenuButtonHide: FC<PropsType> = ({
  children,
  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <SideMenuButton
      onClick={(e) => {
        setIsCollapsed((prev) => !prev);
      }}
      $collapsed={isCollapsed}
      title={isCollapsed ? "Show" : "Hide"}
    >
      {children}
    </SideMenuButton>
  );
};

export default SideMenuButtonHide;
