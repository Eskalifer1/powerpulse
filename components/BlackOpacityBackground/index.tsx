"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { BlackOpacitySideBarBackgroundWrap } from "./style";

type PropsType = {
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
};

const BlackOpacitySideBarBackground: FC<PropsType> = ({ setIsCollapsed }) => {
  return (
    <BlackOpacitySideBarBackgroundWrap
      role="button"
      tabIndex={0}
      className="sideMenuBackground"
      onClick={() => setIsCollapsed((prev) => !prev)}
    />
  );
};

export default BlackOpacitySideBarBackground;
