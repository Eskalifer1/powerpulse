"use client";

import { ExerciseType } from "@/types/Exercise";
import { FC } from "react";
import {
    TableWorkoutNavigationBiMinusCircle,
    TableWorkoutNavigationBiPlusCircle,
    TableWorkoutNavigationButton,
    TableWorkoutNavigationButtonWrap,
} from "./style";

interface PropsType {
  item: ExerciseType;
}

const TableWorkoutNavigation: FC<PropsType> = ({ item }) => {
  const handleIncrease = () => {
    console.log(item._id);
  };
  const handleteDecrease = () => {
    console.log(item._id);
  };

  return (
    <TableWorkoutNavigationButtonWrap>
      <TableWorkoutNavigationButton
        $type="primary"
        $size="sm"
        onClick={handleIncrease}
      >
        <TableWorkoutNavigationBiPlusCircle />
      </TableWorkoutNavigationButton>
      <TableWorkoutNavigationButton
        $type="secondary"
        $size="sm"
        onClick={handleteDecrease}
      >
        <TableWorkoutNavigationBiMinusCircle />
      </TableWorkoutNavigationButton>
    </TableWorkoutNavigationButtonWrap>
  );
};

export default TableWorkoutNavigation;
