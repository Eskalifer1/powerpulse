"use client";

import LinkButton from "@/components/LinkButton";
import { DefaultButton } from "@/uiKit/button/style";
import { LinkEnum } from "@/utils/enum/links";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { SignButtonsWrap } from "./style";

const SignButtons = () => {
  const t = useTranslations("Global");

  return (
    <SignButtonsWrap>
      <DefaultButton $type="primary" $size="md" onClick={() => signIn()}>
        {t("Login")}
      </DefaultButton>
      <LinkButton
        $type="secondary"
        $size="md"
        id="registerButton"
        href={LinkEnum.REGISTRATION}
      >
        {t("Register")}
      </LinkButton>
    </SignButtonsWrap>
  );
};

export default SignButtons;
