import LinkButton from "@/components/LinkButton";
import { DefalutMain } from "@/styles/DefaultMain";
import { ItemsCenter } from "@/styles/ItemsCenter";
import { LinkEnum } from "@/utils/enum/links";
import { useTranslations } from "next-intl";
import ExerciseTableSection from "./TableSection";
import { ExerciseTitle } from "./style";

const ExerciseScreen = () => {
  const t = useTranslations("ExercisesPage");

  return (
    <DefalutMain>
      <ExerciseTitle>{t("Title")}</ExerciseTitle>
      <ExerciseTableSection />
      <ItemsCenter $marginTop="3rem">
        <LinkButton href={LinkEnum.EXCERICES_CREATE} $type="primary" $size="lg">
          {t("CreateExcercises")}
        </LinkButton>
      </ItemsCenter>
    </DefalutMain>
  );
};

export default ExerciseScreen;
