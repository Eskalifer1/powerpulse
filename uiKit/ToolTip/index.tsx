"use client";

import { useOutsideClick } from "@/utils/hooks/useOnClickOutside";
import { FC, useRef, useState } from "react";
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

  const handleClose = () => {
    setIsVisible(false);
  };

  const tooltipRef = useRef(null);

  useOutsideClick(tooltipRef, handleClose, isVisible);

  return (
    <ToolTipWrap onClick={() => setIsVisible((prev) => !prev)} ref={tooltipRef}>
      {!!isVisible && <ToolTipText>{text}</ToolTipText>}
      {Icon ? <Icon /> : <TbInfoOctagon size={size} />}
    </ToolTipWrap>
  );
};
