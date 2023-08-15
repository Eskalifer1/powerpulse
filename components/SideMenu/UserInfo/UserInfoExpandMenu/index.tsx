"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { UserInfoExpandMenuWrap } from "./style";

const UserInfoDropDown = dynamic(() => import("./UserInfoDropDown"));

const UserInfoExpandMenu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <UserInfoExpandMenuWrap>
      <BiDotsVerticalRounded
        size={30}
        onClick={() => setClicked((prev) => !prev)}
      />
      {!!clicked && <UserInfoDropDown />}
    </UserInfoExpandMenuWrap>
  );
};

export default UserInfoExpandMenu;
