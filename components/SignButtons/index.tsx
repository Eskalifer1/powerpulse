"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { LinkEnum } from "@/utils/enum/links";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";
import { SignButtonDivider, SignButtonsWrap } from "./style";

const SignButtons = () => {
  const t = useTranslations("Global");
  const { status } = useSession();

  const authenticated = status !== "unauthenticated";

  if (authenticated) return;

  return (
    <SignButtonsWrap>
      <LinkButton $type="primary" $size="md" href={LinkEnum.REGISTRATION}>
        {t("Register")}
      </LinkButton>
      <SignButtonDivider>{t("Or")}</SignButtonDivider>
      <DefaultButton
        $type="secondary"
        $size="md"
        onClick={() => signIn(undefined, { callbackUrl: "/" })}
        type="button"
      >
        {t("Login")}
      </DefaultButton>
    </SignButtonsWrap>
  );
};

export default SignButtons;
