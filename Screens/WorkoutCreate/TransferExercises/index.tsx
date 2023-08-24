"use client";

import TransferList from "@/components/TransferList";
import { ExerciseType } from "@/types/Exercise";
import { TransferListDataType } from "@/types/TransferList";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { Loader } from "@/uiKit/Loader/style";
import { useGetData } from "@/utils/hooks/useGetData";
import { forwardRef } from "react";
import { TransferListExercisesWrap } from "./style";

type PropsType = {};

const TransferExercises = forwardRef<TransferListRefElementType, PropsType>(
  ({}, ref) => {
    const { data, isLoading, isFetching } =
      useGetData<ExerciseType[]>("exercises/users");

    if (isLoading || isFetching) return <Loader />;
    if (!data) return;

    const initialData: TransferListDataType<ExerciseType> = {
      listData: data || [],
      columns: {
        "column-1": {
          id: "column-1",
          title: "Created Exercises",
          columnIds: [...data.map((exercise) => exercise._id)],
        },
        "column-2": {
          id: "column-2",
          title: "Workout Exercises",
          columnIds: [],
        },
      },
      // Facilitate reordering of the columns
      columnOrder: ["column-1", "column-2"],
    };

    return (
      <TransferListExercisesWrap>
        <TransferList data={initialData} ref={ref} />
      </TransferListExercisesWrap>
    );
  }
);

TransferExercises.displayName = "TransferExercises";

export default TransferExercises;
