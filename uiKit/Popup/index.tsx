import { FC, ReactNode } from "react";
import CloseButton from "../CloseButton";
import { PopUpOverlay } from "./style";

type PropsType = {
  children: ReactNode;
};

const PopUp: FC<PropsType> = ({ children }) => {
  return (
    <PopUpOverlay defaultChecked>
      <CloseButton />
      {children}
    </PopUpOverlay>
  );
};

export default PopUp;
