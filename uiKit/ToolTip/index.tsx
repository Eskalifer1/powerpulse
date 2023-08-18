"use client";

import { FC, useState } from "react";
import { IconType } from "react-icons";
import { TbInfoOctagon } from "react-icons/tb";
import { ToolTipText, ToolTipWrap } from "./style";

interface PropsType {
  text: string;
  icon?: IconType;
  size?: number;
}

export const ToolTip: FC<PropsType> = ({ text, icon: Icon, size = 25 }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ToolTipWrap
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {!!isVisible && <ToolTipText>{text}</ToolTipText>}
      {Icon ? <Icon /> : <TbInfoOctagon size={size} />}
    </ToolTipWrap>
  );
};
