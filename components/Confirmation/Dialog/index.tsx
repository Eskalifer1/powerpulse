"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { Loader } from "@/uiKit/Loader/style";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
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

  const [isLoading, setIsLoading] = useState(false);

  const handleResolve = async () => {
    setIsLoading(true);
    try {
      await resolve();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OverlayingPopUp onClose={reject} isOpened={open}>
      <DialogWrap>
        <DialogHeaderWrap>
          <DialogHeaderTitle>{title || t("Title")}</DialogHeaderTitle>
        </DialogHeaderWrap>
        <DialogDescription>{text || t("Description")}</DialogDescription>
        <DialogButtonsWrap>
          <DefaultButton
            $size="lg"
            $type="primary"
            onClick={reject}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader $size="0.8rem" />
            ) : (
              secondaryButtonText || t("Close")
            )}
          </DefaultButton>

          <DefaultButton
            $size="lg"
            $type="danger"
            onClick={handleResolve}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader $size="0.8rem" />
            ) : (
              primaryButtonText || t("Delete")
            )}
          </DefaultButton>
        </DialogButtonsWrap>
      </DialogWrap>
    </OverlayingPopUp>
  );
};

export default Dialog;
