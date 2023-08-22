import HomePageScreen from "@/Screens/HomePage";
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
  };
}

export default function Home() {
  return <HomePageScreen />;
}
