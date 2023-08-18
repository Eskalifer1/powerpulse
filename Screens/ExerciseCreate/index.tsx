import CreateExercisesForm from "@/components/Forms/CreateExercise";
import { DefalutMain } from "@/styles/DefaultMain";
import { DefalutTitleH1 } from "@/styles/DefaultTitle";
import { useTranslations } from "next-intl";

const ExerciseCreateScreen = () => {
  const t = useTranslations("ExercisesCreatePage");

  return (
    <DefalutMain>
      <DefalutTitleH1>{t("Title")}</DefalutTitleH1>
      <CreateExercisesForm />;
    </DefalutMain>
  );
};

export default ExerciseCreateScreen;
