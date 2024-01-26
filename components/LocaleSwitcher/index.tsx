"use client";

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LocaleSwitcherLink, LocaleSwitcherWrap } from "./style";

const LocaleSwitcher = () => {
  const locales = ["en", "uk"] as const;
  const { usePathname } = createSharedPathnamesNavigation({ locales });
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
