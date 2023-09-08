import * as yup from "yup";

export const CreateExerciseScheme = yup.object({
  name: yup.string().required("Errors.Required"),
  weight: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
  count: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("count", "Errors.CountError", function (value) {
      const maxCount = this.parent.maxCount;
      const minCount = this.parent.minCount;
      return value >= minCount && value <= maxCount;
    })
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
  minCount: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("minCount", "Errors.MinCountMaxCountError", function (value) {
      const maxCount = this.parent.maxCount; // Access maxCount from the parent object
      return value <= maxCount - 2;
    })
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
  maxCount: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
  countUp: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
  weightUp: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
});
