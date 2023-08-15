import { signOut } from "next-auth/react";
import { UserInfoDropDownButton, UserInfoDropDownWrap } from "./style";

const UserInfoDropDown = () => {
  return (
    <UserInfoDropDownWrap>
      <UserInfoDropDownButton onClick={() => signOut()}>
        Logout
      </UserInfoDropDownButton>
    </UserInfoDropDownWrap>
  );
};

export default UserInfoDropDown;
