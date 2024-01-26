"use client";

import TableWithTitle from "@/components/TableWithTitle";
import { WorkoutType } from "@/types/Workout";
import { workoutTableHeaders } from "@/utils/consts/exerciseTableHeaders";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TableWorkoutRowNavigation from "./TableWorkoutRowNavigation";
import WorkoutTableNavigation from "./WorkoutTableNavigation";
import { NoWorkoutTitle, TableSectionWrap } from "./style";

const TableSection = () => {
  const t = useTranslations("WorkoutPage");
  const { data = [], refetch } = useGetData<WorkoutType[]>(
    "exercises/users/training"
  );
  const [isDisabled, setIsDisabled] = useState<string | null>(null);
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
          isDisabled={isDisabled === training._id}
          globalNavigation={
            <WorkoutTableNavigation
              id={training._id}
              refetch={refetch}
              item={training}
              setIsDisabled={setIsDisabled}
            />
          }
          key={training._id}
        />
      ))}
    </TableSectionWrap>
  );
};

export default TableSection;
