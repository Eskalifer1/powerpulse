import ExerciseCreateScreen from "@/Screens/ExerciseCreate";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "ExercisesCreatePage.MetaData");

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t("Keywords"),
  } as Metadata;
}

const ExercisesCreate = () => {
  return <ExerciseCreateScreen />;
};

export default ExercisesCreate;
