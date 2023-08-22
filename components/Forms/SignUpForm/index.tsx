"use client";

import { AuthService } from "@/services/Auth";
import { StyledForm } from "@/styles/StyledForm";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { Input, InputBlock, InputErrorText } from "@/uiKit/Input/style";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { SignUpScheme } from "@/utils/schemas/SignUpScheme";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { SignUpButtonsWrap, SignuUpButtonDivider } from "./style";

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
  const onSubmit = async (data: SignUpFormType) => {
    const response = await AuthService.signUp(data);
    statusManageFunction(
      response,
      ResponseEnum.CREATED,
      t("Notifications.Created"),
      t("Notifications.Error")
    );
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputBlock>
        <Input {...register("name")} placeholder={t("Placeholders.Name")} />
        {errors.name && (
          <InputErrorText>{t(errors.name.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Input {...register("email")} placeholder={t("Placeholders.Email")} />
        {errors.email && (
          <InputErrorText>{t(errors.email.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Input
          {...register("password")}
          placeholder={t("Placeholders.Password")}
          type="password"
        />
        {errors.password && (
          <InputErrorText>{t(errors.password.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Input
          {...register("confirmPassword")}
          placeholder={t("Placeholders.ConfirmPassword")}
          type="password"
        />
        {errors.confirmPassword && (
          <InputErrorText>{t(errors.confirmPassword.message)}</InputErrorText>
        )}
      </InputBlock>
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
