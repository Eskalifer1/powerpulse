import { DefaultButton, DefaultButtonPropsType } from "@/uiKit/button/style";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface PropsType extends DefaultButtonPropsType {
  href: string;
  children: ReactNode;
}

const LinkButton: FC<PropsType> = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <DefaultButton {...props}>{children}</DefaultButton>
    </Link>
  );
};

export default LinkButton;
