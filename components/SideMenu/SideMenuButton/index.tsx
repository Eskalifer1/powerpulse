"use client";

import { FC, ReactNode, useState } from "react";
import { SideMenuButton } from "./style";

interface PropsType {
  children: ReactNode;
}

const SideMenuButtonHide: FC<PropsType> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <SideMenuButton
        onClick={(e) => {
          setCollapsed((prev) => !prev);
          const idButton = document.querySelector("#isCollapsed");
          idButton?.setAttribute("data-collapsed", String(!collapsed));
        }}
        $collapsed={collapsed}
        title={collapsed ? "Show" : "Hide"}
      >
        {children}
      </SideMenuButton>
    </>
  );
};

export default SideMenuButtonHide;
