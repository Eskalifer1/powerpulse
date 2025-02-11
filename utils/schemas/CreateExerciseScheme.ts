import * as yup from "yup";

export const CreateExerciseScheme = yup.object({
  name: yup.string().required("ExercisesCreatePage.Errors.Required"),
  weight: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    ),
  count: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test("count", "ExercisesCreatePage.Errors.CountError", function (value) {
      const maxCount = this.parent.maxCount;
      const minCount = this.parent.minCount;
      return value >= minCount && value <= maxCount;
    })
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    )
    .integer("ExercisesCreatePage.Errors.Integer"),
  minCount: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test(
      "minCount",
      "ExercisesCreatePage.Errors.MinCountMaxCountError",
      function (value) {
        const maxCount = this.parent.maxCount;
        return value <= maxCount - 2;
      }
    )
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    )
    .integer("ExercisesCreatePage.Errors.Integer"),
  maxCount: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    )
    .integer("ExercisesCreatePage.Errors.Integer"),
  countUp: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    )
    .integer("ExercisesCreatePage.Errors.Integer"),
  weightUp: yup
    .number()
    .required("ExercisesCreatePage.Errors.Required")
    .typeError("ExercisesCreatePage.Errors.Number")
    .test(
      "Positive",
      "ExercisesCreatePage.Errors.MoreThanZero",
      (value) => value > 0
    ),
});
