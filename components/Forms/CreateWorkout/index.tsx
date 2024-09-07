"use client";

import Form, { FormProps } from "@/components/Form";
import FormField from "@/components/Form/Field";
import TransferList from "@/components/TransferList";
import { ExerciseType } from "@/types/Exercise";
import { WorkoutType } from "@/types/Workout";
import { InputBlock } from "@/uiKit/Input/style";
import { Label } from "@/uiKit/Label/style";
import { useGetData } from "@/utils/hooks/useGetData";
import { CreateWorkoutScheme } from "@/utils/schemas/CreateWorkoutScheme";
import { useTranslations } from "next-intl";
import { memo } from "react";

interface PropsType
  extends Omit<FormProps<WorkoutType>, "children" | "validationSchema"> {}

const CreateWorkoutForm = ({ ...props }: PropsType) => {
  const t = useTranslations("CreateWorkoutPage");

  const { data, isLoading } = useGetData<ExerciseType[]>("exercises/users");

  return (
    <Form validationSchema={CreateWorkoutScheme} {...props}>
      <FormField
        name="name"
        label={t("Labels.Name")}
        placeholder={t("Placeholders.Name")}
      />
      <InputBlock>
        <Label>{t("Labels.Exercises")}</Label>
        <TransferList
          name="exercisesId"
          allItems={data || []}
          isLoading={isLoading}
          renderItem={(exercise) => exercise.name}
          getItemId={(exercise) => exercise._id}
          titles={{
            available: t("TransferList.TitleCreatedExercises"),
            selected: t("TransferList.TitleWorkoutExercises"),
          }}
        />
      </InputBlock>
    </Form>
  );
};

export default memo(CreateWorkoutForm);
