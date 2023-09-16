"use client";

import CreateExercisesForm from "@/components/Forms/CreateExercise";
import { CreateFormButtonsWrap } from "@/styles/CreateFormButtonsWrap";
import {
  CreateExerciseFormType,
  CreateExerciseForwardRefType,
} from "@/types/Forms/CreateExerciseForm";
import { DefaultButton } from "@/uiKit/button/style";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { statusManageFunction } from "@/utils/functions/StatusManage";
import { useApiData } from "@/utils/hooks/useApiData";
import { useTranslations } from "next-intl";
import React, { MutableRefObject, useRef } from "react";

const CreateExercisePart = () => {
  const t = useTranslations("ExercisesCreatePage");
  const createExercise = useApiData();
  const ref = useRef() as MutableRefObject<CreateExerciseForwardRefType>;

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
    ref.current.reset();
  };

  return (
    <CreateExercisesForm onSuccess={onSuccess} ref={ref}>
      <CreateFormButtonsWrap>
        <DefaultButton
          $type="primary"
          $size="md"
          type="button"
          onClick={() => {
            ref.current.reset();
          }}
        >
          {t("Buttons.Reset")}
        </DefaultButton>
        <DefaultButton $type="secondary" $size="md" type="submit">
          {t("Buttons.Submit")}
        </DefaultButton>
      </CreateFormButtonsWrap>
    </CreateExercisesForm>
  );
};

export default React.memo(CreateExercisePart);
