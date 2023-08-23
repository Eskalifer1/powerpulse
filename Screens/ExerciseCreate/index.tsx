import CreateExercisesForm from "@/components/Forms/CreateExercise";
import LinkButton from "@/components/LinkButton";
import { DefalutMain } from "@/styles/DefaultMain";
import { DefalutTitleH1 } from "@/styles/DefaultTitle";
import { ItemsCenter } from "@/styles/ItemsCenter";
import { LinkEnum } from "@/utils/enum/links";
import { useTranslations } from "next-intl";

const ExerciseCreateScreen = () => {
  const t = useTranslations("ExercisesCreatePage");

  return (
    <DefalutMain>
      <DefalutTitleH1>{t("Title")}</DefalutTitleH1>
      <CreateExercisesForm />
      <ItemsCenter $marginTop="3rem">
        <LinkButton href={LinkEnum.EXCERICES} $type="primary" $size="lg">
          {t("GoToExcercises")}
        </LinkButton>
      </ItemsCenter>
    </DefalutMain>
  );
};

export default ExerciseCreateScreen;
