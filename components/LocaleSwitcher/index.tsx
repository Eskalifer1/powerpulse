"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { LocaleSwitcherLink, LocaleSwitcherWrap } from "./style";

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  
  const handleChangeLink = (locale: "en" | "uk") => {
    router.replace(pathname, { locale });
  };

  return (
    <LocaleSwitcherWrap>
      <LocaleSwitcherLink
        onClick={() => handleChangeLink("en")}
        $active={locale === "en"}
      >
        En
      </LocaleSwitcherLink>
      <LocaleSwitcherLink
        onClick={() => handleChangeLink("uk")}
        $active={locale === "uk"}
      >
        Ua
      </LocaleSwitcherLink>
    </LocaleSwitcherWrap>
  );
};

export default LocaleSwitcher;
