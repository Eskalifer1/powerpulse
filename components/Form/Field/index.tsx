"use client";

import { ToolTip, ToolTipProps } from "@/uiKit/ToolTip";
import { MessageKeys, useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputBlock, InputErrorText, Label } from "./styled";

interface PropsType extends ComponentProps<"input"> {
  label: string;
  tooltipProps?: ToolTipProps;
  name: string;
}

function FormField({ label, tooltipProps, name, type, ...props }: PropsType) {
  const t = useTranslations();
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <InputBlock>
      <Label htmlFor={name}>
        {!!tooltipProps && <ToolTip {...tooltipProps} />}
        {label}
      </Label>
      <Input
        {...register(name, type === "number" ? { valueAsNumber: true } : {})}
        {...props}
      />
      {errors?.[name] && (
        <InputErrorText>
          {t(errors[name]?.message as MessageKeys<any, any>)}
        </InputErrorText>
      )}
    </InputBlock>
  );
}

export default FormField;
