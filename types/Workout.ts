import { ExerciseType } from "./Exercise";

export type WorkoutType = {
  _id: string;
  name: string;
  exercisesId: ExerciseType[];
  userId: number;
};
