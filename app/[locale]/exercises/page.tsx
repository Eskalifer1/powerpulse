import ExerciseScreen from "@/Screens/Exercise";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "ExercisesPage.MetaData",
  });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: t("Keywords"),
  } as Metadata;
}

const Exercises = async () => {
  return <ExerciseScreen />;
};

export default Exercises;
