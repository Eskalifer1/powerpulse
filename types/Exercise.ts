export interface ExerciseType {
  name: string;
  weight: number;
  count: number;
  minCount: number;
  maxCount: number;
  countUp: number;
  weightUp: number;
}

export type ValidExerciseFields = keyof ExerciseType;
