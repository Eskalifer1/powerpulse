import Image from "next/image";
import { FC } from "react";
import {
  InfoCardImageWrap,
  InfoCardTextBlock,
  InfoCardTextBlockSubTitle,
  InfoCardTextBlockTitle,
  InfoCardWrap,
} from "./style";

interface PropsType {
  title: string;
  subTitle: string;
  photoSrc?: string;
}

const InfoCard: FC<PropsType> = ({ title, subTitle, photoSrc }) => {
  return (
    <InfoCardWrap>
      <InfoCardImageWrap>
        <Image src={photoSrc || "/svg/user.svg"} alt="User Photo" fill />
      </InfoCardImageWrap>
      <InfoCardTextBlock>
        <InfoCardTextBlockTitle>{title}</InfoCardTextBlockTitle>
        <InfoCardTextBlockSubTitle>{subTitle}</InfoCardTextBlockSubTitle>
      </InfoCardTextBlock>
    </InfoCardWrap>
  );
};

export default InfoCard;
