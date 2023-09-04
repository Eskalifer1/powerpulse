"use client";

import { FC } from "react";
import { DialogHeaderTitle, DialogHeaderWrap } from "./style";

interface PropsType {
  title: string;
}

const DialogHeader: FC<PropsType> = ({ title }) => {
  return (
    <DialogHeaderWrap>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
    </DialogHeaderWrap>
  );
};

export default DialogHeader;
