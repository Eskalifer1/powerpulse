import WorkoutScreen from "@/Screens/Workout";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "WorkoutPage.MetaData",
  });

  return {
    title: t("Title"),
    description: t("Description"),
  };
}

const Workout = () => {
  return <WorkoutScreen />;
};

export default Workout;
