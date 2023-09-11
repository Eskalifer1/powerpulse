"use client";

import TableExerciseNavigation from "@/Screens/Exercise/TableSection/TableExerciseNavigation";
import Table from "@/components/Table";
import { ExerciseType } from "@/types/Exercise";
import { Loader } from "@/uiKit/Loader/style";
import { exerciseTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import { ExerciseTableSectionWrap } from "./style";

const ExerciseTableSection = () => {
  const t = useTranslations("Global.TableHeaders");
  const { data, isLoading, isFetching, refetch } =
    useGetData<ExerciseType[]>("exercises/users");

  if (isLoading || isFetching) return <Loader $marginTop="10rem" />;
  return (
    <ExerciseTableSectionWrap>
      <Table
        items={data || []}
        headersTitle={exerciseTableHeaders}
        navigationColumn={t("Management")}
        refetch={refetch}
        navigationRow={TableExerciseNavigation}
      />
    </ExerciseTableSectionWrap>
  );
};

export default ExerciseTableSection;
