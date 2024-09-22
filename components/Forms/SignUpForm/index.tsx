"use client";

import FormField from "@/components/Form/Field";
import { AuthService } from "@/services/Auth";
import { StyledForm } from "@/styles/StyledForm";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { DefaultButton } from "@/uiKit/button/style";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { SignUpScheme } from "@/utils/schemas/SignUpScheme";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { SignUpButtonsWrap, SignuUpButtonDivider } from "./style";

const SignUpForm = () => {
  const t = useTranslations("SignUpForm");

  const { handleSubmit, reset } = useForm<SignUpFormType>({
    resolver: useYupValidationResolver(SignUpScheme),
  });
  const onSubmit = async (data: SignUpFormType) => {
    AuthService.signUp(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="name"
        label="Name"
        placeholder={t("Placeholders.Name")}
      />
      <FormField
        name="email"
        label="Email"
        placeholder={t("Placeholders.Email")}
      />
      <FormField
        name="password"
        label="password"
        placeholder={t("Placeholders.Password")}
      />
      <FormField
        name="confirmPassword"
        label="confirmPassword"
        placeholder={t("Placeholders.ConfirmPassword")}
      />
      <SignUpButtonsWrap>
        <DefaultButton $type="primary" $size="md" type="submit">
          {t("Register")}
        </DefaultButton>
        <SignuUpButtonDivider>{t("Or")}</SignuUpButtonDivider>
        <DefaultButton
          $type="secondary"
          $size="md"
          onClick={() => signIn()}
          type="button"
        >
          {t("Login")}
        </DefaultButton>
      </SignUpButtonsWrap>
    </StyledForm>
  );
};

export default SignUpForm;
