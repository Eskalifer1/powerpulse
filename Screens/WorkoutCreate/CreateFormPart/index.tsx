"use client";

import CreateWorkoutForm from "@/components/Forms/CreateWorkout";
import { CreateFormButtonsWrap } from "@/styles/CreateFormButtonsWrap";
import { TransferListRefElementType } from "@/types/TransferListGetElementType";
import { WorkoutType } from "@/types/Workout";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import React, { MutableRefObject, useRef } from "react";

const CreateWorkoutFormPart = () => {
  const t = useTranslations("CreateWorkoutPage");
  const createFunction = useApiData();
  const ref = useRef() as MutableRefObject<TransferListRefElementType>;

  const onReset = () => {
    ref.current.clear();
  };
  const onSuccess = async (data: WorkoutType) => {
    const ids = ref.current?.getIds("column-2");
    const createWorkoutoObj = {
      ...data,
      exercisesId: ids,
    };
    const dataLog = await createFunction(
      "exercises/createTraining",
      "POST",
      createWorkoutoObj
    );

    statusManageFunction(
      dataLog.status as number,
      ResponseEnum.CREATED,
      t("Notification.Created")
    );
    onReset();
  };

  return (
    <CreateWorkoutForm onSuccess={onSuccess} ref={ref}>
      <CreateFormButtonsWrap>
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
      </CreateFormButtonsWrap>
    </CreateWorkoutForm>
  );
};

export default React.memo(CreateWorkoutFormPart);
