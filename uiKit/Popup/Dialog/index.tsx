"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { FC } from "react";
import OverlayingPopUp from "../OverlayingPopUp";
import DialogHeader from "./DialogHeader";
import { DialogButtonsWrap, DialogDescription, DialogWrap } from "./style";

type PropsType = {
  isOpened: boolean;
  onCLose: () => void;
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonOnClick: () => void;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
};

const Dialog: FC<PropsType> = ({
  isOpened,
  onCLose,
  title,
  description,
  primaryButtonText,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonOnClick,
}) => {
  return (
    <OverlayingPopUp onClose={onCLose} isOpened={isOpened}>
      <DialogWrap>
        <DialogHeader title={title} />
        <DialogDescription>{description}</DialogDescription>
        <DialogButtonsWrap>
          {secondaryButtonText && secondaryButtonOnClick && (
            <DefaultButton
              $size="lg"
              $type="primary"
              onClick={secondaryButtonOnClick}
            >
              {secondaryButtonText}
            </DefaultButton>
          )}
          <DefaultButton
            $size="lg"
            $type="danger"
            onClick={primaryButtonOnClick}
          >
            {primaryButtonText}
          </DefaultButton>
        </DialogButtonsWrap>
      </DialogWrap>
    </OverlayingPopUp>
  );
};

export default Dialog;
