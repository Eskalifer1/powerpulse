import { ExerciseType } from "../Exercise";
import { tableHeaderType } from "../TableHeaderType";

export interface TableProps {
  exercises: ExerciseType[];
  headersTitle: tableHeaderType<any>[];
}
