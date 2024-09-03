"use client";

import { CreateFormButtonsWrap } from "@/styles/CreateFormButtonsWrap";
import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC } from "react";
import CreateExercisesForm from "../Forms/CreateExercise";

type PropsType = {
  initialData: CreateExerciseFormType;
  refetch: () => void;
  onClose: () => void;
};

const EditExercisesModal: FC<PropsType> = ({
  initialData,
  refetch,
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
    refetch();
  };

  return (
    <CreateExercisesForm onSuccess={onSuccess} initialValues={initialData}>
      <CreateFormButtonsWrap>
        <DefaultButton
          $type="primary"
          $size="md"
          type="button"
          onClick={onClose}
        >
          {t("Buttons.Close")}
        </DefaultButton>
        <DefaultButton $type="secondary" $size="md" type="submit">
          {t("Buttons.Edit")}
        </DefaultButton>
      </CreateFormButtonsWrap>
    </CreateExercisesForm>
  );
};

export default EditExercisesModal;
