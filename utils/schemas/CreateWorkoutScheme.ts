import * as yup from "yup";

export const CreateWorkoutScheme = yup.object({
  name: yup.string().required("CreateWorkoutPage.Errors.Required"),
});
