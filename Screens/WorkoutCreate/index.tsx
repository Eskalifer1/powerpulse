import CreateWorkoutForm from "@/components/Forms/CreateWorkout";
import LinkButton from "@/components/LinkButton";
import { DefalutMain } from "@/styles/DefaultMain";
import { DefalutTitleH1 } from "@/styles/DefaultTitle";
import { ItemsCenter } from "@/styles/ItemsCenter";
import { LinkEnum } from "@/utils/enum/links";
import { useTranslations } from "next-intl";

const WorkoutCreateScreen = () => {
  const t = useTranslations("CreateWorkoutPage");
  return (
    <DefalutMain>
      <DefalutTitleH1>{t("Title")}</DefalutTitleH1>
      <CreateWorkoutForm />
      <ItemsCenter $marginTop="3rem">
        <LinkButton href={LinkEnum.WORKOUT} $type="primary" $size="lg">
          {t("GoToWorkouts")}
        </LinkButton>
      </ItemsCenter>
    </DefalutMain>
  );
};

export default WorkoutCreateScreen;
