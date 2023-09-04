import { useTranslations } from "next-intl";
import AboutItem from "./AboutItem";
import { AboutGrid, AboutTitle, AboutWrap } from "./style";

const AboutSection = () => {
  const t = useTranslations("HomePage.AboutSection");

  return (
    <AboutWrap>
      <AboutTitle>{t("Title")}</AboutTitle>
      <AboutGrid>
        <AboutItem number="1" text={t("FirstStep")} />
        <AboutItem number="2" text={t("SecondStep")} />
        <AboutItem number="3" text={t("ThirdStep")} />
        <AboutItem number="4" text={t("FourthStep")} />
        <AboutItem number="5" text={t("FifthStep")} />
        <AboutItem number="6" text={t("SixthStep")} />
      </AboutGrid>
    </AboutWrap>
  );
};

export default AboutSection;
