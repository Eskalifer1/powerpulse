import { SideMenuItemType } from "@/types/SideMenuItem";
import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  SideMenuBlockWrap,
  SideMenuIcon,
  SideMenuItem,
  SideMenuLink,
  SideMenuList,
  SideMenuTitle,
} from "./style";

interface PropsType {
  items: SideMenuItemType[];
}

const SideMenuBlock: FC<PropsType> = ({ items }) => {
  const t = useTranslations("NavBar");

  return (
    <SideMenuBlockWrap>
      <SideMenuList>
        {items.map((item) => (
          <SideMenuItem key={item.name}>
            <SideMenuLink href={item.href} aria-label={item.name}>
              <SideMenuIcon>{item.icon}</SideMenuIcon>
              <SideMenuTitle className="collaps">{t(item.name)}</SideMenuTitle>
            </SideMenuLink>
          </SideMenuItem>
        ))}
      </SideMenuList>
    </SideMenuBlockWrap>
  );
};

export default SideMenuBlock;
