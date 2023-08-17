"use client";

import LinkButton from "@/components/LinkButton";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { Input, InputErrorText } from "@/uiKit/Input/style";
import { DefaultButton } from "@/uiKit/button/style";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { SignUpScheme } from "@/utils/schemas/SignUpScheme";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { SignUpButtonsWrap, SignUpStyledForm } from "./style";

const SignUpForm = () => {
  const t = useTranslations("SignUpForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormType>({
    resolver: useYupValidationResolver(SignUpScheme),
  });
  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
    reset();
  };

  return (
    <SignUpStyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder={t("Placeholders.Name")} />
      {errors.name && <InputErrorText>{t(errors.name.message)}</InputErrorText>}
      <Input {...register("email")} placeholder={t("Placeholders.Email")} />
      {errors.email && (
        <InputErrorText>{t(errors.email.message)}</InputErrorText>
      )}
      <Input
        {...register("password")}
        placeholder={t("Placeholders.Password")}
        type="password"
      />
      {errors.password && (
        <InputErrorText>{t(errors.password.message)}</InputErrorText>
      )}
      <Input
        {...register("confirmPassword")}
        placeholder={t("Placeholders.ConfirmPassword")}
        type="password"
      />
      {errors.confirmPassword && (
        <InputErrorText>{t(errors.confirmPassword.message)}</InputErrorText>
      )}
      <SignUpButtonsWrap>
        <LinkButton
          $type="secondary"
          $size="md"
          href="/signin"
          onClick={() => signIn()}
        >
          {t("Login")}
        </LinkButton>
        <DefaultButton $type="primary" $size="md" type="submit">
          {t("Register")}
        </DefaultButton>
      </SignUpButtonsWrap>
    </SignUpStyledForm>
  );
};

export default SignUpForm;
