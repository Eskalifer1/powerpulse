"use client";

import Form, { FormProps } from "@/components/Form";
import FormField from "@/components/Form/Field";
import { CreateExerciseFormType } from "@/types/Forms/CreateExerciseForm";
import { CreateExerciseScheme } from "@/utils/schemas/CreateExerciseScheme";
import { useTranslations } from "next-intl";

interface PropsType
  extends Omit<
    FormProps<CreateExerciseFormType>,
    "children" | "validationSchema"
  > {}

const CreateExercisesForm = ({ ...props }: PropsType) => {
  const t = useTranslations("ExercisesCreatePage");
  return (
    <Form validationSchema={CreateExerciseScheme} {...props}>
      <FormField
        name="name"
        tooltipProps={{ text: t("Tips.Name") }}
        label={t("Labels.Name")}
        placeholder={t("Placeholders.Name")}
      />
      <FormField
        name="weight"
        tooltipProps={{ text: t("Tips.Weight") }}
        label={t("Labels.Weight")}
        placeholder={t("Placeholders.Weight")}
        type="number"
      />
      <FormField
        name="count"
        tooltipProps={{ text: t("Tips.Count") }}
        label={t("Labels.Count")}
        placeholder={t("Placeholders.Count")}
        type="number"
      />
      <FormField
        name="minCount"
        tooltipProps={{ text: t("Tips.MinCount") }}
        label={t("Labels.MinCount")}
        placeholder={t("Placeholders.MinCount")}
        type="number"
      />
      <FormField
        name="maxCount"
        tooltipProps={{ text: t("Tips.MaxCount") }}
        label={t("Labels.MaxCount")}
        placeholder={t("Placeholders.MaxCount")}
        type="number"
      />
      <FormField
        name="countUp"
        tooltipProps={{ text: t("Tips.CountUp") }}
        label={t("Labels.CountUp")}
        placeholder={t("Placeholders.CountUp")}
        type="number"
      />
      <FormField
        name="weightUp"
        tooltipProps={{ text: t("Tips.WeightUp") }}
        label={t("Labels.WeightUp")}
        placeholder={t("Placeholders.WeightUp")}
        type="number"
      />
    </Form>
  );
};

export default CreateExercisesForm;
