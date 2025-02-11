"use client";

import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { FC } from "react";
import CreateExercisesForm from "../Forms/CreateExercise";

const Modal = dynamic(() => import("@/uiKit/Popup/Modal"));

type PropsType = {
  initialData: CreateExerciseFormType;
  onSubmit: () => void;
  onClose: () => void;
  isOpened: boolean;
};

const EditExercisesModal: FC<PropsType> = ({
  initialData,
  onSubmit,
  onClose,
  isOpened,
}) => {
  const t = useTranslations();
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
      t("ExercisesCreatePage.Notification.Success")
    );
    onClose();
    onSubmit();
  };

  return (
    <Modal onCLose={onClose} isOpened={isOpened}>
      <h3>{t("Global.Dialogs.Edit")}</h3>
      <CreateExercisesForm
        onSubmit={onSuccess}
        defaultValues={initialData}
        cancelButtonText={t("ExercisesCreatePage.Buttons.Close")}
        submitButtonText={t("ExercisesCreatePage.Buttons.Edit")}
        onCancel={onClose}
      />
    </Modal>
  );
};

export default EditExercisesModal;
