import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import UserInfoExpandMenu from "./UserInfoExpandMenu";
import { UserInfoWrap } from "./style";

const SignButtons = dynamic(() => import("./SignButtons"));
const InfoCard = dynamic(() => import("@/uiKit/InfoCard"));

export const UserInfo = async () => {
  const session = await getServerSession(authConfig);

  return (
    <UserInfoWrap $marginTop="auto">
      {session ? (
        <>
          <InfoCard
            title="Artem"
            subTitle="artemkryt1asdfasdfasdfasfasd800@gmail.com"
          />
          <UserInfoExpandMenu />
        </>
      ) : (
        <SignButtons />
      )}
    </UserInfoWrap>
  );
};
