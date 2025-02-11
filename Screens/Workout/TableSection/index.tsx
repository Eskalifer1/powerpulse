"use client";

import Table, { ITableColumn } from "@/components/TableT";
import { ExerciseType } from "@/types/Exercise";
import { WorkoutType } from "@/types/Workout";
import { Loader } from "@/uiKit/Loader/style";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { NoWorkoutTitle, TableSectionWrap } from "./style";
import TableWorkoutRowNavigation from "./TableWorkoutRowNavigation";
import WorkoutTableNavigation from "./WorkoutTableNavigation";

const COLUMNS: ITableColumn<ExerciseType>[] = [
  { label: "Name", render: (row) => row.name },
  { label: "Count", render: (row) => row.count },
  { label: "Weight", render: (row) => row.weight },
];

const TableSection = () => {
  const t = useTranslations("WorkoutPage");
  const { data = [], isLoading } = useGetData<WorkoutType[]>(
    "exercises/users/training"
  );
  const [isDisabled, setIsDisabled] = useState<string | null>(null);

  if (isLoading) return <Loader />;

  if (data?.length <= 0)
    return <NoWorkoutTitle>{t("NoWorkout")}</NoWorkoutTitle>;

  return (
    <TableSectionWrap>
      {data?.map((training) => (
        <Table
          key={training._id}
          columns={COLUMNS}
          title={training.name}
          data={training.exercisesId}
          isLoading={isLoading}
          rowActions={(row, setIsDisabled) => (
            <TableWorkoutRowNavigation
              item={row}
              setDisabledRow={setIsDisabled}
            />
          )}
          disabledTable={isDisabled === training._id}
          actions={
            <WorkoutTableNavigation
              id={training._id}
              item={training}
              setIsDisabled={setIsDisabled}
            />
          }
        />
      ))}
    </TableSectionWrap>
  );
};

export default TableSection;
