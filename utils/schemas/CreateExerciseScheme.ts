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
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0)
    .integer("Errors.Integer"),
  minCount: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("minCount", "Errors.MinCountMaxCountError", function (value) {
      const maxCount = this.parent.maxCount; // Access maxCount from the parent object
      return value <= maxCount - 2;
    })
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0)
    .integer("Errors.Integer"),
  maxCount: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0)
    .integer("Errors.Integer"),
  countUp: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0)
    .integer("Errors.Integer"),
  weightUp: yup
    .number()
    .required("Errors.Required")
    .typeError("Errors.Number")
    .test("Positive", "Errors.MoreThanZero", (value) => value > 0),
});
