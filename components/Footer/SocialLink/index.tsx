import { FC, ReactNode } from "react";
import { SocialLinkTitle, SocialLinkWrap, SocialLinksWrap } from "./style";

interface PropsType {
  creatorTitle: string;
  children: ReactNode;
}

const SocialLinks: FC<PropsType> = ({ creatorTitle, children }) => {
  return (
    <SocialLinksWrap>
      <SocialLinkTitle>{creatorTitle}</SocialLinkTitle>
      <SocialLinkWrap>{children}</SocialLinkWrap>
    </SocialLinksWrap>
  );
};

export default SocialLinks;
