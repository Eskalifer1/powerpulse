"use client";

import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { useApiData } from "@/utils/hooks/useApiData";
import { FC } from "react";
import {
  TableWorkoutNavigationBiMinusCircle,
  TableWorkoutNavigationBiPlusCircle,
  TableWorkoutNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
  refetch?: () => void;
}

const TableWorkoutRowNavigation: FC<PropsType> = ({
  item,
  refetch = () => {},
}) => {
  const updateFucntion = useApiData();

  const handleIncrease = async () => {
    await updateFucntion(`exercises/increaseExercise/${item._id}`, "PATCH");
    refetch();
  };
  const handleteDecrease = async () => {
    await updateFucntion(`exercises/decreaseExercise/${item._id}`, "PATCH");
    refetch();
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
