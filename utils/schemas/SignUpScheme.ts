import * as yup from "yup";

export const SignUpScheme = yup.object({
  name: yup
    .string()
    .required("SignUpForm.Errors.Required")
    .max(30, "SignUpForm.Errors.maxLength"),
  email: yup
    .string()
    .required("SignUpForm.Errors.Required")
    .email("SignUpForm.Errors.Email")
    .max(30, "SignUpForm.Errors.maxLength"),
  password: yup
    .string()
    .required("SignUpForm.Errors.Required")
    .min(6, "SignUpForm.Errors.minLength")
    .max(30, "SignUpForm.Errors.maxLength"),
  confirmPassword: yup
    .string()
    .required("SignUpForm.Errors.Required")
    .min(6, "SignUpForm.Errors.minLength")
    .max(30, "SignUpForm.Errors.maxLength")
    .oneOf([yup.ref("password")], "SignUpForm.Errors.PasswordMatch"),
});
