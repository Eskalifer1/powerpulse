"use client";

import { GoToMainButton } from "@/components/GoMainButton";
import { HelpPageWrap } from "@/styles/HelpPageWrap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { ErrorPageImageWrap, ErrorTitle } from "./style";

interface PropsType {
  error: Error;
}

const ErrorPageScreen: FC<PropsType> = ({ error }) => {
  console.error(error);

  const t = useTranslations("ErrorPage");

  return (
    <HelpPageWrap $marginTop="4rem">
      <ErrorTitle>{t("title")}</ErrorTitle>
      <ErrorPageImageWrap>
        <Image src={"/svg/purple-bird.svg"} alt="Purple Bird" fill priority />
      </ErrorPageImageWrap>
      <GoToMainButton $size="lg">{t("goToHome")}</GoToMainButton>
    </HelpPageWrap>
  );
};

export default ErrorPageScreen;
