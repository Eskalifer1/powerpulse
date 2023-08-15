"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { LocaleSwitcherLink, LocaleSwitcherWrap } from "./style";

const LocaleSwitcher = () => {
  const pathname = usePathname();

  const locale = useLocale();

  return (
    <LocaleSwitcherWrap>
      <LocaleSwitcherLink href={pathname} locale="en" $active={locale === "en"}>
        En
      </LocaleSwitcherLink>
      <LocaleSwitcherLink href={pathname} locale="uk" $active={locale === "uk"}>
        Ua
      </LocaleSwitcherLink>
    </LocaleSwitcherWrap>
  );
};

export default LocaleSwitcher;
