"use client";

import LinkButton from "@/components/LinkButton";
import Table from "@/components/Table";
import { DefalutMain } from "@/styles/DefaultMain";
import { ItemsCenter } from "@/styles/ItemsCenter";
import { ExerciseType } from "@/types/Exercise";
import { exerciseTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { LinkEnum } from "@/utils/enum/links";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import { Loader } from "../../uiKit/Loader/style";
import { ExerciseTitle } from "./style";

const ExerciseScreen = () => {
  const t = useTranslations("ExercisesPage");
  const { data, isLoading, isFetching } =
    useGetData<ExerciseType[]>("exercises/users");
  console.log(data);
  if (isLoading || isFetching) return <Loader $marginTop="10rem" />;

  return (
    <DefalutMain>
      <ExerciseTitle>{t("Title")}</ExerciseTitle>
      <Table exercises={data || []} headersTitle={exerciseTableHeaders} />
      <ItemsCenter $marginTop="3rem">
        <LinkButton href={LinkEnum.EXCERICES_CREATE} $type="primary" $size="lg">
          {t("CreateExcercises")}
        </LinkButton>
      </ItemsCenter>
    </DefalutMain>
  );
};

export default ExerciseScreen;
