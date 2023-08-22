"use client";

import Table from "@/components/Table";
import { DefalutMain } from "@/styles/DefaultMain";
import { ExerciseType } from "@/types/Exercise";
import { exerciseTableHeaders } from "@/utils/consts/exerciseTableHeaders";
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
    </DefalutMain>
  );
};

export default ExerciseScreen;
