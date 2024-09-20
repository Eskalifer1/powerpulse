"use client";

import { WorkoutType } from "@/types/Workout";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC } from "react";
import CreateWorkoutForm from "../Forms/CreateWorkout";

type PropsType = {
  initialData: WorkoutType;
  onSubmit: () => void;
  onClose: () => void;
};

const EditWorkoutModal: FC<PropsType> = ({
  initialData,
  onSubmit,
  onClose,
}) => {
  const t = useTranslations("CreateWorkoutPage");
  const updateWorkoutFunction = useApiData();

  const handleSubmit = async (data: WorkoutType) => {
    const dataLog = await updateWorkoutFunction(
      "exercises/updateTraining",
      "PATCH",
      data
    );

    statusManageFunction(
      dataLog.status as number,
      ResponseEnum.SUCCESS,
      t("Notification.Edit")
    );
    onClose();
    onSubmit();
  };

  return (
    <CreateWorkoutForm
      onSubmit={handleSubmit}
      defaultValues={{
        ...initialData,
        // @ts-ignore
        exercisesId: initialData.exercisesId.map((item) => item._id),
      }}
      cancelButtonText={t("Buttons.Close")}
      submitButtonText={t("Buttons.Edit")}
      onCancel={onClose}
    />
  );
};

export default EditWorkoutModal;
