"use client";

import Form from "@/components/Form";
import FormField from "@/components/Form/Field";
import { AuthService } from "@/services/Auth";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { DefaultButton } from "@/uiKit/button/style";
import { SignUpScheme } from "@/utils/schemas/SignUpScheme";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { SignUpButtonsWrap, SignuUpButtonDivider } from "./style";

const SignUpForm = () => {
  const t = useTranslations("SignUpForm");

  const onSubmit = async (data: SignUpFormType) => {
    await AuthService.signUp(data);
  };

  return (
    <Form onSubmit={onSubmit} validationSchema={SignUpScheme} resetOnSubmit>
      <FormField
        name="name"
        label={t("Placeholders.Name")}
        placeholder={t("Placeholders.Name")}
      />
      <FormField
        name="email"
        label={t("Placeholders.Email")}
        placeholder={t("Placeholders.Email")}
      />
      <FormField
        name="password"
        label={t("Placeholders.Password")}
        placeholder={t("Placeholders.Password")}
        type="password"
      />
      <FormField
        name="confirmPassword"
        label={t("Placeholders.ConfirmPassword")}
        placeholder={t("Placeholders.ConfirmPassword")}
        type="password"
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
    </Form>
  );
};

export default SignUpForm;
