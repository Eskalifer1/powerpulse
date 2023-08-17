import LinkButton from "@/components/LinkButton";
import { LinkEnum } from "@/utils/enum/links";
import { useTranslations } from "next-intl";
import {
  NavigationSectionButtonsWrap,
  NavigationSectionTitle,
  NavigationSectionWrap,
} from "./style";

const NavigationSection = () => {
  const t = useTranslations("HomePage.NavigationSection");

  return (
    <NavigationSectionWrap>
      <NavigationSectionTitle>{t("Title")}</NavigationSectionTitle>
      <NavigationSectionButtonsWrap>
        <LinkButton href={LinkEnum.WORKOUT} $type="primary" $size="md">
          {t("GoToWorkouts")}
        </LinkButton>
        <LinkButton href={LinkEnum.EXCERICES} $type="secondary" $size="md">
          {t("GoToExcercises")}
        </LinkButton>
        <LinkButton href={LinkEnum.WORKOUT_CREATE} $type="primary" $size="md">
          {t("CreateWorkouts")}
        </LinkButton>
        <LinkButton
          href={LinkEnum.EXCERICES_CREATE}
          $type="secondary"
          $size="md"
        >
          {t("CreateExcercises")}
        </LinkButton>
      </NavigationSectionButtonsWrap>
    </NavigationSectionWrap>
  );
};

export default NavigationSection;
