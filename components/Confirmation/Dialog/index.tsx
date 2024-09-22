"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { useTranslations } from "next-intl";
import { FC } from "react";
import OverlayingPopUp from "../../../uiKit/Popup/OverlayingPopUp";
import { IConfirmationProps } from "../ConfirmationProvider";
import {
  DialogButtonsWrap,
  DialogDescription,
  DialogHeaderTitle,
  DialogHeaderWrap,
  DialogWrap,
} from "./style";

interface PropsType extends Partial<IConfirmationProps> {
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const Dialog: FC<PropsType> = ({
  open = false,
  resolve = () => {},
  reject = () => {},
  title,
  text,
  primaryButtonText,
  secondaryButtonText,
}) => {
  const t = useTranslations("Global.Dialogs");
  return (
    <OverlayingPopUp onClose={reject} isOpened={open}>
      <DialogWrap>
        <DialogHeaderWrap>
          <DialogHeaderTitle>{title || t("Title")}</DialogHeaderTitle>
        </DialogHeaderWrap>
        <DialogDescription>{text || t("Description")}</DialogDescription>
        <DialogButtonsWrap>
          <DefaultButton $size="lg" $type="primary" onClick={reject}>
            {secondaryButtonText || t("Close")}
          </DefaultButton>

          <DefaultButton $size="lg" $type="danger" onClick={resolve}>
            {primaryButtonText || t("Delete")}
          </DefaultButton>
        </DialogButtonsWrap>
      </DialogWrap>
    </OverlayingPopUp>
  );
};

export default Dialog;
