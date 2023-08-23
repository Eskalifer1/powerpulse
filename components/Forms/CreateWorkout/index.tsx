"use client";

import { CreateFormButtonsWrap } from "@/styles/CreateFormButtonsWrap";
import { StyledForm } from "@/styles/StyledForm";
import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { Input, InputBlock, InputErrorText } from "@/uiKit/Input/style";
import { Label } from "@/uiKit/Label/style";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { usePostData } from "@/utils/hooks/usePostData";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { CreateWorkoutScheme } from "@/utils/schemas/CreateWorkoutScheme";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

const CreateWorkoutForm = () => {
  const t = useTranslations("CreateWorkoutPage");
  const postFunction = usePostData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateExerciseFormType>({
    resolver: useYupValidationResolver(CreateWorkoutScheme),
  });

  const onReset = () => {
    reset();
  };

  const onSubmit = async (data: CreateExerciseFormType) => {
    const dataLog = await postFunction("exercises/createTraining", data);
    console.log(dataLog);
    statusManageFunction(
      dataLog,
      ResponseEnum.CREATED,
      t("Notification.Created"),
      t("Notification.Error")
    );
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputBlock>
        <Label htmlFor="name">{t("Labels.Name")}</Label>
        <Input {...register("name")} placeholder={t("Placeholders.Name")} />
        {errors.name && (
          <InputErrorText>{t(errors.name.message)}</InputErrorText>
        )}
      </InputBlock>
      <CreateFormButtonsWrap>
        <DefaultButton
          $type="primary"
          $size="md"
          type="button"
          onClick={onReset}
        >
          {t("Buttons.Reset")}
        </DefaultButton>
        <DefaultButton $type="secondary" $size="md" type="submit">
          {t("Buttons.Submit")}
        </DefaultButton>
      </CreateFormButtonsWrap>
    </StyledForm>
  );
};

export default CreateWorkoutForm;
