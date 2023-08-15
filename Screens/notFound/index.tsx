import { GoToMainButton } from "@/components/GoMainButton";
import NotFoundImg from "@/public/svg/404.svg";
import { HelpPageWrap } from "@/styles/HelpPageWrap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  NotFoundDescription,
  NotFoundImageWrap,
  NotFoundSubTitle,
  NotFoundTitle,
} from "./style";

const NotFoundScreen = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <HelpPageWrap $marginTop="4rem">
      <NotFoundTitle>{t("title")}</NotFoundTitle>
      <NotFoundSubTitle>{t("subTitle")}</NotFoundSubTitle>
      <NotFoundImageWrap>
        <Image
          src={NotFoundImg}
          alt="Vacation Photo"
          fill
          priority
          sizes="(max-width: 1250px) 50vw, (min-width: 1251px) 600px"
        />
      </NotFoundImageWrap>
      <NotFoundDescription>{t("helpInfo")}</NotFoundDescription>
      <GoToMainButton $size="lg">{t("goToHome")}</GoToMainButton>
    </HelpPageWrap>
  );
};

export default NotFoundScreen;
