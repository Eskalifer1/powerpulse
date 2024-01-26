import NotFoundScreen from "@/Screens/notFound";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return {
    title: t("MetaData.title"),
    robots: "noindex, nofollow",
  } as Metadata;
}

export default function NotFound() {
  return <NotFoundScreen />;
}
