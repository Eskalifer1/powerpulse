export type CreateExerciseFormType = {
  name: string;
  weight: number;
  count: number;
  minCount: number;
  maxCount: number;
  countUp: number;
  weightUp: number;
};

export type CreateExerciseForwardRefType = {
  reset: () => void;
};
