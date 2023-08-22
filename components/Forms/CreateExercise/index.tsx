"use client";

import { StyledForm } from "@/styles/StyledForm";
import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { Input, InputBlock, InputErrorText } from "@/uiKit/Input/style";
import { Label } from "@/uiKit/Label/style";
import { ToolTip } from "@/uiKit/ToolTip";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { usePostData } from "@/utils/hooks/usePostData";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { CreateExerciseScheme } from "@/utils/schemas/CreateExerciseScheme";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { CreateExerciseButtonsWrap } from "./style";

const CreateExercisesForm = () => {
  const t = useTranslations("ExercisesCreatePage");
  const postFunction = usePostData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateExerciseFormType>({
    resolver: useYupValidationResolver(CreateExerciseScheme),
  });
  const onReset = () => {
    reset();
  };
  const onSubmit = async (data: CreateExerciseFormType) => {
    const dataLog = await postFunction("exercises/createExercise", data);
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
        <Label htmlFor="name">
          <ToolTip text={t("Tips.Name")} />
          {t("Labels.Name")}
        </Label>
        <Input {...register("name")} placeholder={t("Placeholders.Name")} />
        {errors.name && (
          <InputErrorText>{t(errors.name.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="weight">
          <ToolTip text={t("Tips.Weight")} />
          {t("Labels.Weight")}
        </Label>
        <Input {...register("weight")} placeholder={t("Placeholders.Weight")} />
        {errors.weight && (
          <InputErrorText>{t(errors.weight.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="count">
          <ToolTip text={t("Tips.Count")} />
          {t("Labels.Count")}
        </Label>
        <Input {...register("count")} placeholder={t("Placeholders.Count")} />
        {errors.count && (
          <InputErrorText>{t(errors.count.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="minCount">
          <ToolTip text={t("Tips.MinCount")} />
          {t("Labels.MinCount")}
        </Label>
        <Input
          {...register("minCount")}
          placeholder={t("Placeholders.MinCount")}
        />
        {errors.minCount && (
          <InputErrorText>{t(errors.minCount.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="MaxCount">
          <ToolTip text={t("Tips.MaxCount")} />
          {t("Labels.MaxCount")}
        </Label>
        <Input
          {...register("maxCount")}
          placeholder={t("Placeholders.MaxCount")}
        />
        {errors.maxCount && (
          <InputErrorText>{t(errors.maxCount.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="countUp">
          <ToolTip text={t("Tips.CountUp")} />
          {t("Labels.CountUp")}
        </Label>
        <Input
          {...register("countUp")}
          placeholder={t("Placeholders.CountUp")}
        />
        {errors.countUp && (
          <InputErrorText>{t(errors.countUp.message)}</InputErrorText>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="weightUp">
          <ToolTip text={t("Tips.WeightUp")} />
          {t("Labels.WeightUp")}
        </Label>
        <Input
          {...register("weightUp")}
          placeholder={t("Placeholders.WeightUp")}
        />
        {errors.weightUp && (
          <InputErrorText>{t(errors.weightUp.message)}</InputErrorText>
        )}
      </InputBlock>
      <CreateExerciseButtonsWrap>
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
      </CreateExerciseButtonsWrap>
    </StyledForm>
  );
};

export default CreateExercisesForm;
