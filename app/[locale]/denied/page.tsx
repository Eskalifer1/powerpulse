import DeniedPage from "@/Screens/DeniedPage";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "DeniedPage" });

  return {
    title: t("MetaData.title"),
    robots: "noindex, nofollow",
  } as Metadata;
}

export default function Denied() {
  return <DeniedPage />;
}
