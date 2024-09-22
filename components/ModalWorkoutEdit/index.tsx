"use client";

import { WorkoutType } from "@/types/Workout";
import Modal from "@/uiKit/Popup/Modal";
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
  isOpened: boolean;
};

const EditWorkoutModal: FC<PropsType> = ({
  initialData,
  onSubmit,
  onClose,
  isOpened,
}) => {
  const t = useTranslations();
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
    <Modal isOpened={isOpened} onCLose={onClose}>
      <h2>{t("Global.Dialogs.Edit")}</h2>
      <CreateWorkoutForm
        onSubmit={handleSubmit}
        defaultValues={{
          ...initialData,
          // @ts-ignore
          exercisesId: initialData.exercisesId.map((item) => item._id),
        }}
        cancelButtonText={t("CreateWorkoutPage.Buttons.Close")}
        submitButtonText={t("CreateWorkoutPage.Buttons.Edit")}
        onCancel={onClose}
      />
    </Modal>
  );
};

export default EditWorkoutModal;
