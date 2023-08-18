import { Metadata } from "next";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "ExercisesPage.MetaData");

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t("Keywords"),
  } as Metadata;
}

const Exercises = () => {
  return <></>;
};

export default Exercises;
