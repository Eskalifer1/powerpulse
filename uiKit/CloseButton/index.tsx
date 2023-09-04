"use client";

import { FC } from "react";
import { BiX } from "react-icons/bi";
import { CloseButtonWrap } from "./style";

type PropsType = {
  iconSize?: number;
  onClose?: () => void;
};

const CloseButton: FC<PropsType> = ({ iconSize, onClose }) => {
  return (
    <CloseButtonWrap title="close" onClick={onClose}>
      <BiX size={iconSize || 25} />
    </CloseButtonWrap>
  );
};

export default CloseButton;
