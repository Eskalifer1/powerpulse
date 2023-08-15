"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { SignButtonsWrap } from "./style";

const SignButtons = () => {
  const t = useTranslations("Global");

  const regiterHandler = () => {
    console.log("hi");
  };

  return (
    <SignButtonsWrap>
      <DefaultButton $type="primary" $size="md" onClick={() => signIn()}>
        {t("Login")}
      </DefaultButton>
      <DefaultButton
        $type="secondary"
        $size="md"
        id="registerButton"
        onClick={regiterHandler}
      >
        {t("Register")}
      </DefaultButton>
    </SignButtonsWrap>
  );
};

export default SignButtons;
