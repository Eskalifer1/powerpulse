import { HorizontalLine } from "@/uiKit/HorizontalLine/style";
import { MarginBlock } from "@/uiKit/MarginBlock/style";
import { nvaItems } from "@/utils/nav";
import { BiChevronLeft } from "react-icons/bi";
import BlackOpacitySideBarBackground from "../BlackOpacityBackground";
import LocaleSwitcher from "../LocaleSwitcher";
import Logo from "../Logo";
import SideMenuBlock from "./SideMenuBlock";
import SideMenuButtonHide from "./SideMenuButton";
import { UserInfo } from "./UserInfo";
import { SideMenuWithBackground, SideMenuWrap } from "./style";

export const SideMenu = () => {
  return (
    <SideMenuWithBackground>
      <SideMenuWrap>
        <SideMenuButtonHide>
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
        <div id="isCollapsed" data-collapsed="true"></div>
        <UserInfo />
      </SideMenuWrap>
      <BlackOpacitySideBarBackground />
    </SideMenuWithBackground>
  );
};
