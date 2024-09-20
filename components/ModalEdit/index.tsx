"use client";

import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC } from "react";
import CreateExercisesForm from "../Forms/CreateExercise";

type PropsType = {
  initialData: CreateExerciseFormType;
  onSubmit: () => void;
  onClose: () => void;
};

const EditExercisesModal: FC<PropsType> = ({
  initialData,
  onSubmit,
  onClose,
}) => {
  const t = useTranslations("ExercisesCreatePage");
  const updateExercise = useApiData();

  const onSuccess = async (data: CreateExerciseFormType) => {
    const dataLog = await updateExercise(
      "exercises/updateExercise",
      "PATCH",
      data
    );

    statusManageFunction(
      dataLog.status as number,
      ResponseEnum.SUCCESS,
      t("Notification.Success")
    );
    onClose();
    onSubmit();
  };

  return (
    <CreateExercisesForm
      onSubmit={onSuccess}
      defaultValues={initialData}
      cancelButtonText={t("Buttons.Reset")}
      submitButtonText={t("Buttons.Submit")}
      onCancel={onClose}
    />
  );
};

export default EditExercisesModal;
