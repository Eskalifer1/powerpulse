import * as yup from "yup";

export const SignUpScheme = yup.object({
  name: yup.string().required("Errors.Required").max(30, "Errors.maxLength"),
  email: yup.string().required("Errors.Required").email("Errors.Email").max(30, "Errors.maxLength"),
  password: yup
    .string()
    .required("Errors.Required")
    .min(6, "Errors.minLength")
    .max(30, "Errors.maxLength"),
  confirmPassword: yup
    .string()
    .required("Errors.Required")
    .min(6, "Errors.minLength")
    .max(30, "Errors.maxLength")
    .oneOf([yup.ref("password")], "Errors.PasswordMatch"),
});
