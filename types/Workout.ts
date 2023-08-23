import { ExerciseType } from "./Exercise";

export type WorkoutType = {
  _id: number;
  name: string;
  exercisesId: ExerciseType[];
  userId: number;
};
