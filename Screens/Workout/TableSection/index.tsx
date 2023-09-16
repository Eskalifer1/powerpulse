"use client";

import TableWithTitle from "@/components/TableWithTitle";
import { WorkoutType } from "@/types/Workout";
import { Loader } from "@/uiKit/Loader/style";
import { workoutTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import TableWorkoutRowNavigation from "./TableWorkoutRowNavigation";
import WorkoutTableNavigation from "./WorkoutTableNavigation";
import { NoWorkoutTitle, TableSectionWrap } from "./style";

const TableSection = () => {
  const t = useTranslations("WorkoutPage");
  const {
    data = [],
    isLoading,
    isFetching,
    refetch,
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
          refetch={refetch}
          headersTitle={workoutTableHeaders}
          navigationColumn={t("AdditionalColumn")}
          navigationRow={TableWorkoutRowNavigation}
          globalNavigation={
            <WorkoutTableNavigation
              id={training._id}
              refetch={refetch}
              item={training}
            />
          }
          key={training._id}
        />
      ))}
    </TableSectionWrap>
  );
};

export default TableSection;
