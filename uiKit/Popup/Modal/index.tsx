"use client";

import { FC, ReactNode } from "react";
import OverlayingPopUp from "../OverlayingPopUp";
import { ModalWrap } from "./style";

interface PropsType {
  children: ReactNode;
  isOpened: boolean;
  onCLose: () => void;
}

const Modal: FC<PropsType> = ({ children, onCLose, isOpened }) => {
  return (
    <OverlayingPopUp onClose={onCLose} isOpened={isOpened}>
      <ModalWrap>{children}</ModalWrap>
    </OverlayingPopUp>
  );
};

export default Modal;
