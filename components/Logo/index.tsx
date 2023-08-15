import Image from "next/image";
import { LogoLink, LogoWrap } from "./style";

const Logo = () => {
  return (
    <LogoWrap>
      <LogoLink href={"/"}>
        <Image
          src={"/images/logo.png"}
          priority
          alt="Company Logo"
          fill
          sizes="100px"
          quality={90}
        />
      </LogoLink>
    </LogoWrap>
  );
};

export default Logo;
