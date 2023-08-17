import { FC } from "react";
import { BiX } from "react-icons/bi";
import { CloseButtonWrap } from "./style";

type PropsType = {
  iconSize?: number;
};

const CloseButton: FC<PropsType> = ({ iconSize }) => {
  return (
    <CloseButtonWrap title="close">
      <BiX size={iconSize || 25} />
    </CloseButtonWrap>
  );
};

export default CloseButton;
