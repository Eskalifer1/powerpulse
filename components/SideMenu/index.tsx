"use client";

import { HorizontalLine } from "@/uiKit/HorizontalLine/style";
import { MarginBlock } from "@/uiKit/MarginBlock/style";
import { nvaItems } from "@/utils/nav";
import { FC, ReactNode, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import BlackOpacitySideBarBackground from "../BlackOpacityBackground";
import LocaleSwitcher from "../LocaleSwitcher";
import Logo from "../Logo";
import SideMenuBlock from "./SideMenuBlock";
import SideMenuButtonHide from "./SideMenuButton";
import { SideMenuWithBackground, SideMenuWrap } from "./style";

type PropsType = {
  children: ReactNode;
};

export const SideMenu: FC<PropsType> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <SideMenuWithBackground $collapsed={isCollapsed}>
      <SideMenuWrap $collapsed={isCollapsed}>
        <SideMenuButtonHide
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        >
          <BiChevronLeft size={30} />
        </SideMenuButtonHide>
        <Logo />
        <MarginBlock $marginTop="3rem">
          <LocaleSwitcher />
        </MarginBlock>
        <HorizontalLine $type="primary" $marginTop="1rem" $height="3px" />
        <MarginBlock $marginTop="2rem">
          <SideMenuBlock items={nvaItems} />
        </MarginBlock>
        {children}
      </SideMenuWrap>
      <BlackOpacitySideBarBackground setIsCollapsed={setIsCollapsed} />
    </SideMenuWithBackground>
  );
};
