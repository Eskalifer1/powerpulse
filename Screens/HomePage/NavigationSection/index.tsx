import LinkButton from "@/components/LinkButton";
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
        <LinkButton href="/workout" $type="primary" $size="md">
          {t("GoToWorkouts")}
        </LinkButton>
        <LinkButton href="/excercises" $type="secondary" $size="md">
          {t("GoToExcercises")}
        </LinkButton>
        <LinkButton href="/workout/create" $type="primary" $size="md">
          {t("CreateWorkouts")}
        </LinkButton>
        <LinkButton href="/excercises/create" $type="secondary" $size="md">
          {t("CreateExcercises")}
        </LinkButton>
      </NavigationSectionButtonsWrap>
    </NavigationSectionWrap>
  );
};

export default NavigationSection;
