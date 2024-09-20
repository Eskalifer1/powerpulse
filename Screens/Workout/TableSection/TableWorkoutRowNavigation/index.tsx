"use client";

import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { useApiData } from "@/utils/hooks/useApiData";
import { useInvalidateQueries } from "@/utils/hooks/useGetData";
import { FC } from "react";
import {
  TableWorkoutNavigationBiMinusCircle,
  TableWorkoutNavigationBiPlusCircle,
  TableWorkoutNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
  setDisabledRow: (value: boolean) => void;
}

const TableWorkoutRowNavigation: FC<PropsType> = ({ item, setDisabledRow }) => {
  const updateFucntion = useApiData();
  const invalidateData = useInvalidateQueries();

  const handleIncrease = async () => {
    setDisabledRow(true);
    await updateFucntion(`exercises/increaseExercise/${item._id}`, "PATCH");
    setDisabledRow(false);
    invalidateData("exercises/users/training");
  };
  const handleteDecrease = async () => {
    setDisabledRow(true);
    await updateFucntion(`exercises/decreaseExercise/${item._id}`, "PATCH");
    setDisabledRow(false);
    invalidateData("exercises/users/training");
  };

  return (
    <TableWorkoutNavigationButtonWrap>
      <DefaultButtonFlex $type="primary" $size="sm" onClick={handleIncrease}>
        <TableWorkoutNavigationBiPlusCircle />
      </DefaultButtonFlex>
      <DefaultButtonFlex
        $type="secondary"
        $size="sm"
        onClick={handleteDecrease}
      >
        <TableWorkoutNavigationBiMinusCircle />
      </DefaultButtonFlex>
    </TableWorkoutNavigationButtonWrap>
  );
};

export default TableWorkoutRowNavigation;
