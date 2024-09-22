import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uk"],
  defaultLocale: "en",
});

export type MessageKeys = Parameters<
  ReturnType<typeof useTranslations<never>>
>[0];

export type TFunction = ReturnType<typeof useTranslations<never>>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
