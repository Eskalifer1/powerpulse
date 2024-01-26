import { Dispatch, FC, SetStateAction } from "react";
import { ExerciseType } from "../Exercise";
import { tableHeaderType } from "../TableHeaderType";

export interface TableProps {
  items: ExerciseType[];
  headersTitle: tableHeaderType<any>[];
  navigationColumn?: string;
  navigationRow?: FC<{
    item: ExerciseType;
    refetch?: () => void;
    setDisabledRow: Dispatch<SetStateAction<boolean>>;
  }>;
  refetch?: () => void;
}
