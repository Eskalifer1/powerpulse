import { FC } from "react";
import { AboutItemNumberWrap, AboutItemText, AboutItemWrap } from "./style";

interface PropsType {
  number: string;
  text: string;
}

const AboutItem: FC<PropsType> = ({ number, text }) => {
  return (
    <AboutItemWrap>
      <AboutItemNumberWrap>{number}</AboutItemNumberWrap>
      <AboutItemText>{text}</AboutItemText>
    </AboutItemWrap>
  );
};

export default AboutItem;
