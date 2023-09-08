import { FC } from "react";
import { ExerciseType } from "../Exercise";
import { tableHeaderType } from "../TableHeaderType";

export interface TableProps {
  items: ExerciseType[];
  headersTitle: tableHeaderType<any>[];
  navigationColumn?: string;
  navigationRow?: FC<{ item: ExerciseType; refetch?: () => void }>;
  refetch?: () => void;
}
