import { HorizontalLine } from "@/uiKit/HorizontalLine/style";
import { CreatorEnum } from "@/utils/enum/creators";
import { useTranslations } from "next-intl";
import { BiLogoGithub } from "react-icons/bi";
import SocialLinks from "./SocialLink";
import {
  FooterText,
  FooterWrap,
  SocialBlockLink,
  SocialLinksOutsideWrap,
} from "./style";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <FooterWrap>
      <FooterText>
        {t("Title", {
          firstName: CreatorEnum.FIRSTCREATOR,
          secondName: CreatorEnum.SECONDCREATOR,
        })}
      </FooterText>
      <HorizontalLine $type="grey" $width="80%" />
      <SocialLinksOutsideWrap>
        <SocialLinks creatorTitle={CreatorEnum.FIRSTCREATOR}>
          <SocialBlockLink href="https://github.com/Eskalifer1">
            <BiLogoGithub size={30} />
          </SocialBlockLink>
        </SocialLinks>
        <SocialLinks creatorTitle={CreatorEnum.SECONDCREATOR}>
          <SocialBlockLink href="https://github.com/vltally">
            <BiLogoGithub size={30} />
          </SocialBlockLink>
        </SocialLinks>
      </SocialLinksOutsideWrap>
    </FooterWrap>
  );
};

export default Footer;
