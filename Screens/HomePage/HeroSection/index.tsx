import heroImage from "@/public/images/heroImage.jpg";
import { useTranslations } from "next-intl";
import {
  HeroImage,
  HeroImageWrap,
  HeroSectionDescription,
  HeroSectionTextBlock,
  HeroSectionTitle,
  HeroSectionWrap
} from "./style";

const HeroSection = () => {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <HeroSectionWrap>
      <HeroImageWrap>
        <HeroImage
          src={heroImage}
          alt="Workout Hero"
          fill
          priority
          sizes="95vw"
          placeholder="blur"
        />
        <HeroSectionTextBlock>
          <HeroSectionTitle>{t("Title")}</HeroSectionTitle>
          <HeroSectionDescription>{t("Description")}</HeroSectionDescription>
        </HeroSectionTextBlock>
      </HeroImageWrap>
    </HeroSectionWrap>
  );
};

export default HeroSection;
