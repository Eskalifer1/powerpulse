import WorkoutCreateScreen from "@/Screens/WorkoutCreate";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "CreateWorkoutPage.MetaData",
  });

  return {
    title: t("Title"),
    description: t("Description"),
  };
}

const WorkoutCreate = () => {
  return <WorkoutCreateScreen />;
};

export default WorkoutCreate;
