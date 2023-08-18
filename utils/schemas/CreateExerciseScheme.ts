import * as yup from "yup";

export const CreateExerciseScheme = yup.object({
  name: yup.string().required("Errors.Required"),
  weight: yup.number().required("Errors.Required").typeError("Errors.Number"),
  count: yup.number().required("Errors.Required").typeError("Errors.Number"),
  minCount: yup.number().required("Errors.Required").typeError("Errors.Number"),
  maxCount: yup.number().required("Errors.Required").typeError("Errors.Number"),
  countUp: yup.number().required("Errors.Required").typeError("Errors.Number"),
  weightUp: yup.number().required("Errors.Required").typeError("Errors.Number"),
});
