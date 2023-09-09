import HomePageScreen from "@/Screens/HomePage";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "MetaDataMain");

  return {
    title: t("title"),
    description: t("description"),
    verification: {
      google: "lz4tG-Z5Tt8AwVDMTwh35dgNLhI_gIoEYgPgFWpUMX8"
    }
  } as Metadata;
}

export default function Home() {
  return <HomePageScreen />;
}
