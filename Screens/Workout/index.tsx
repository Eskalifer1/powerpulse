import LinkButton from "@/components/LinkButton";
import { DefalutMain } from "@/styles/DefaultMain";
import { DefalutTitleH1 } from "@/styles/DefaultTitle";
import { ItemsCenter } from "@/styles/ItemsCenter";
import { LinkEnum } from "@/utils/enum/links";
import { useTranslations } from "next-intl";
import TableSection from "./TableSection";

const WorkoutScreen = () => {
  const t = useTranslations("WorkoutPage");

  return (
    <DefalutMain>
      <DefalutTitleH1>{t("Title")}</DefalutTitleH1>
      <TableSection />
      <ItemsCenter $marginTop="3rem">
        <LinkButton href={LinkEnum.WORKOUT_CREATE} $type="primary" $size="lg">
          {t("CreateWorkouts")}
        </LinkButton>
      </ItemsCenter>
    </DefalutMain>
  );
};

export default WorkoutScreen;
