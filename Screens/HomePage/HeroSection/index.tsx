import heroImage from "@/public/images/heroImage.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
    HeroImageWrap,
    HeroSectionDescription,
    HeroSectionTextBlock,
    HeroSectionTitle,
    HeroSectionWrap,
} from "./style";

const HeroSection = () => {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <HeroSectionWrap>
      <HeroImageWrap>
        <Image
          src={heroImage}
          alt="Workout Hero"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          placeholder="blur"
          objectFit="cover"
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
