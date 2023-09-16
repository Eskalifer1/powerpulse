"use client";

import TransferExercises from "@/Screens/WorkoutCreate/TransferExercises";
import { StyledForm } from "@/styles/StyledForm";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { WorkoutType } from "@/types/Workout";
import { Input, InputBlock, InputErrorText } from "@/uiKit/Input/style";
import { Label } from "@/uiKit/Label/style";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { CreateWorkoutScheme } from "@/utils/schemas/CreateWorkoutScheme";
import { useTranslations } from "next-intl";
import React, { ReactNode, forwardRef } from "react";
import { useForm } from "react-hook-form";

type PropsType = {
  initialValues?: WorkoutType;
  onSuccess: (data: WorkoutType) => void;
  children: ReactNode;
  transferListSecondColumn?: string[];
};

const CreateWorkoutForm = forwardRef<TransferListRefElementType, PropsType>(
  ({ initialValues, onSuccess, children, transferListSecondColumn }, ref) => {
    const t = useTranslations("CreateWorkoutPage");

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<WorkoutType>({
      resolver: useYupValidationResolver(CreateWorkoutScheme),
      defaultValues: initialValues,
    });

    return (
      <StyledForm onSubmit={handleSubmit(onSuccess)}>
        <InputBlock>
          <Label htmlFor="name">{t("Labels.Name")}</Label>
          <Input {...register("name")} placeholder={t("Placeholders.Name")} />
          {errors.name && (
            <InputErrorText>{t(errors.name.message)}</InputErrorText>
          )}
        </InputBlock>
        <InputBlock>
          <Label>{t("Labels.Exercises")}</Label>
          <TransferExercises
            ref={ref}
            secondColumn={transferListSecondColumn}
          />
        </InputBlock>
        {children}
      </StyledForm>
    );
  }
);

CreateWorkoutForm.displayName = "CreateWorkoutForm";

export default React.memo(CreateWorkoutForm);
