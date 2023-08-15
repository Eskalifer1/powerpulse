import DeniedPage from "@/Screens/DeniedPage";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "DeniedPage");

  return {
    title: t("MetaData.title"),
    robots: "noindex, nofollow",
  } as Metadata;
}

export default function Denied() {
  return <DeniedPage />;
}
