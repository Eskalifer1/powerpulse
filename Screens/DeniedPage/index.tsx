import { GoToMainButton } from "@/components/GoMainButton";
import SignButtons from "@/components/SignButtons";
import { HelpPageWrap } from "@/styles/HelpPageWrap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  DeniedDescription,
  DeniedSubTitle,
  DeniedTitle,
  LockImageWrap,
} from "./style";

const DeniedPage = () => {
  const t = useTranslations("DeniedPage");

  return (
    <HelpPageWrap $marginTop="var(--help-page-margin)">
      <LockImageWrap>
        <Image src={"/svg/lock.svg"} alt="Lock(Access denied)" fill priority />
      </LockImageWrap>
      <DeniedTitle>{t("title")}</DeniedTitle>
      <DeniedSubTitle>{t("subTitle")}</DeniedSubTitle>
      <DeniedDescription>{t("helpInfo")}</DeniedDescription>
      <GoToMainButton $size="lg">{t("goToHome")}</GoToMainButton>
      <SignButtons />
    </HelpPageWrap>
  );
};

export default DeniedPage;
