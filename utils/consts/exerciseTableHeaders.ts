import { ExerciseType } from "@/types/Exercise";
import { tableHeaderType } from "@/types/TableHeaderType";

export const exerciseTableHeaders: tableHeaderType<ExerciseType>[] = [
  { name: "Name", value: "name" },
  { name: "Count", value: "count" },
  { name: "Weight", value: "weight" },
  { name: "Minimum Count", value: "minCount" },
  { name: "Maximum Count", value: "maxCount" },
  { name: "Count Up", value: "countUp" },
  { name: "Weight Up", value: "weightUp" },
];

export const workoutTableHeaders: tableHeaderType<ExerciseType>[] = [
  { name: "Name", value: "name" },
  { name: "Count", value: "count" },
  { name: "Weight", value: "weight" },
];
