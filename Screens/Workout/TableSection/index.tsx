"use client";

import TableWithTitle from "@/components/TableWithTitle";
import { WorkoutType } from "@/types/Workout";
import { Loader } from "@/uiKit/Loader/style";
import { workoutTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import TableWorkoutNavigation from "./TableWorkoutNavigation";
import { NoWorkoutTitle, TableSectionWrap } from "./style";

const TableSection = () => {
  const t = useTranslations("WorkoutPage");
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetData<WorkoutType[]>("exercises/users/training");

  if (isLoading || isFetching) return <Loader $marginTop="2rem" />;

  if (data?.length <= 0)
    return <NoWorkoutTitle>{t("NoWorkout")}</NoWorkoutTitle>;

  return (
    <TableSectionWrap>
      {data?.map((training) => (
        <TableWithTitle
          title={training.name}
          items={training.exercisesId}
          headersTitle={workoutTableHeaders}
          navigationColumn={t("AdditionalColumn")}
          navigationRow={TableWorkoutNavigation}
        />
      ))}
    </TableSectionWrap>
  );
};

export default TableSection;
