import Portal from "@/uiKit/Portal";
import { FC, ReactNode } from "react";
import {
    OverlayingPopUpContainer,
    OverlayingPopUpOverlay
} from "./style";

interface PropsType {
  children: ReactNode;
  onClose: () => void;
  isOpened: boolean;
}

const OverlayingPopUp: FC<PropsType> = ({ children, isOpened, onClose }) => {
  if (!isOpened) return;

  return (
    <Portal>
      <OverlayingPopUpContainer role="dialog">
        <OverlayingPopUpOverlay role="button" tabIndex={0} onClick={onClose} />
        {children}
      </OverlayingPopUpContainer>
    </Portal>
  );
};

export default OverlayingPopUp;
