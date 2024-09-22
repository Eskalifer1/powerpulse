import { DefaultButton } from "@/uiKit/button/style";
import useYupValidationResolver from "@/utils/hooks/useYupResolver";
import { FormHTMLAttributes, ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { CreateFormButtonsWrap, StyledForm } from "./styled";

export interface FormProps<T extends FieldValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (data: T) => void;
  children: ReactNode;
  defaultValues?: DefaultValues<T>;
  formOptions?: UseFormProps<T>;
  resetOnSubmit?: boolean;
  onCancel?: () => void;
  cancelButtonText: string;
  submitButtonText: string;
  validationSchema: any;
}

function Form<T extends FieldValues>({
  onSubmit,
  children,
  defaultValues,
  formOptions = {},
  resetOnSubmit = false,
  onCancel,
  cancelButtonText,
  submitButtonText,
  validationSchema,
  ...props
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    ...(validationSchema && {
      resolver: useYupValidationResolver(validationSchema),
    }),
    ...formOptions,
  });

  const { handleSubmit, reset } = methods;

  const onFormSubmit = (data: T) => {
    onSubmit(data);
    if (resetOnSubmit) reset();
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onFormSubmit)} {...props}>
        {children}
        <CreateFormButtonsWrap>
          <DefaultButton
            $type="primary"
            $size="md"
            type="button"
            onClick={() => {
              !!onCancel ? onCancel() : reset();
            }}
          >
            {cancelButtonText}
          </DefaultButton>
          <DefaultButton $type="secondary" $size="md" type="submit">
            {submitButtonText}
          </DefaultButton>
        </CreateFormButtonsWrap>
      </StyledForm>
    </FormProvider>
  );
}

export default Form;
