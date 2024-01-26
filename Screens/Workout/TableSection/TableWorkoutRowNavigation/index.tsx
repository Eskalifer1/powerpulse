"use client";

import { DefaultButtonFlex } from "@/styles/DefaultButtonFlex";
import { ExerciseType } from "@/types/Exercise";
import { useApiData } from "@/utils/hooks/useApiData";
import { Dispatch, FC, SetStateAction } from "react";
import {
  TableWorkoutNavigationBiMinusCircle,
  TableWorkoutNavigationBiPlusCircle,
  TableWorkoutNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
  refetch?: () => void;
  setDisabledRow: Dispatch<SetStateAction<boolean>>;
}

const TableWorkoutRowNavigation: FC<PropsType> = ({
  item,
  refetch = () => {},
  setDisabledRow,
}) => {
  const updateFucntion = useApiData();

  const handleIncrease = async () => {
    setDisabledRow(true);
    await updateFucntion(`exercises/increaseExercise/${item._id}`, "PATCH");
    setDisabledRow(false);
    refetch();
  };
  const handleteDecrease = async () => {
    setDisabledRow(true);
    await updateFucntion(`exercises/decreaseExercise/${item._id}`, "PATCH");
    setDisabledRow(false);
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
