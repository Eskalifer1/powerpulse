"use client";

import { CreateFormButtonsWrap } from "@/styles/CreateFormButtonsWrap";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { WorkoutType } from "@/types/Workout";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { getIdsArray } from "@/utils/functions/getIds";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import { FC, MutableRefObject, useRef } from "react";
import CreateWorkoutForm from "../Forms/CreateWorkout";

type PropsType = {
  initialData: WorkoutType;
  refetch: () => void;
  onClose: () => void;
};

const EditWorkoutModal: FC<PropsType> = ({ initialData, refetch, onClose }) => {
  const t = useTranslations("CreateWorkoutPage");
  const updateWorkoutFunction = useApiData();
  const ref = useRef() as MutableRefObject<TransferListRefElementType>;

  const onSuccess = async (data: WorkoutType) => {
    const ids = ref.current?.getIds("column-2");
    const createWorkoutoObj = {
      ...data,
      exercisesId: ids,
    };
    const dataLog = await updateWorkoutFunction(
      "exercises/updateTraining",
      "PATCH",
      createWorkoutoObj
    );

    statusManageFunction(
      dataLog.status as number,
      ResponseEnum.SUCCESS,
      t("Notification.Edit")
    );
    onClose();
    refetch();
  };

  return (
    <CreateWorkoutForm
      onSuccess={onSuccess}
      initialValues={initialData}
      transferListSecondColumn={getIdsArray(initialData.exercisesId)}
      ref={ref}
    >
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
    </CreateWorkoutForm>
  );
};

export default EditWorkoutModal;
