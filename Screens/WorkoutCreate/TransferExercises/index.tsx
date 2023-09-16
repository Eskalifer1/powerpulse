"use client";

import TransferList from "@/components/TransferList";
import { ExerciseType } from "@/types/Exercise";
import { TransferListDataType } from "@/types/TransferList";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { Loader } from "@/uiKit/Loader/style";
import { removeDuplicateStrings } from "@/utils/functions/RemoveDuplicateString";
import { useGetData } from "@/utils/hooks/useGetData";
import { useTranslations } from "next-intl";
import { forwardRef } from "react";
import { TransferListExercisesWrap } from "./style";

type PropsType = {
  secondColumn?: string[];
};

const TransferExercises = forwardRef<TransferListRefElementType, PropsType>(
  ({ secondColumn = [] }, ref) => {
    const t = useTranslations("CreateWorkoutPage");
    const {
      data: firstColumnData,
      isLoading,
      isFetching,
    } = useGetData<ExerciseType[]>("exercises/users");

    if (isLoading || isFetching) return <Loader />;
    if (!firstColumnData) return;

    const firstColumnDataIds = firstColumnData.map((exercise) => exercise._id);

    const clearFirstColumnDataIds = removeDuplicateStrings(
      firstColumnDataIds,
      secondColumn
    );

    const initialData: TransferListDataType<ExerciseType> = {
      listData: firstColumnData || [],
      columns: {
        "column-1": {
          id: "column-1",
          title: t("TransferList.TitleCreatedExercises"),
          columnIds: clearFirstColumnDataIds,
        },
        "column-2": {
          id: "column-2",
          title: t("TransferList.TitleWorkoutExercises"),
          columnIds: secondColumn,
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
