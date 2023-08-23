import WorkoutCreateScreen from "@/Screens/WorkoutCreate";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "CreateWorkoutPage.MetaData");

  return {
    title: t("Title"),
    description: t("Description"),
  };
}

const WorkoutCreate = () => {
  return <WorkoutCreateScreen />;
};

export default WorkoutCreate;
