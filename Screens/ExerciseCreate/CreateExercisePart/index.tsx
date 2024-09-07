"use client";

import CreateExercisesForm from "@/components/Forms/CreateExercise";
import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { memo } from "react";

const CreateExercisePart = () => {
  const t = useTranslations("ExercisesCreatePage");
  const createExercise = useApiData();

  const onSuccess = async (data: CreateExerciseFormType) => {
    const dataLog = await createExercise(
      "exercises/createExercise",
      "POST",
      data
    );

    statusManageFunction(
      dataLog.status as number,
      ResponseEnum.CREATED,
      t("Notification.Created")
    );
  };

  return (
    <CreateExercisesForm
      onSubmit={onSuccess}
      cancelButtonText={t("Buttons.Reset")}
      submitButtonText={t("Buttons.Submit")}
      resetOnSubmit
    />
  );
};

export default memo(CreateExercisePart);
