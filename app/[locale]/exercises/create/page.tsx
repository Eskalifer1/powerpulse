import ExerciseCreateScreen from "@/Screens/ExerciseCreate";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "ExercisesCreatePage.MetaData",
  });

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
