"use client";

import CreateWorkoutForm from "@/components/Forms/CreateWorkout";
import { WorkoutType } from "@/types/Workout";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import React from "react";

const CreateWorkoutFormPart = () => {
  const t = useTranslations("CreateWorkoutPage");
  const createFunction = useApiData();

  const onSuccess = async (data: WorkoutType) => {
    const dataLog = await createFunction(
      "exercises/createTraining",
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
    <CreateWorkoutForm
      onSubmit={onSuccess}
      cancelButtonText="Cancel"
      submitButtonText="Submit"
      resetOnSubmit
    />
  );
};

export default React.memo(CreateWorkoutFormPart);
