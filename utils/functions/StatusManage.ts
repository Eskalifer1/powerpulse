import { toast } from "react-hot-toast";

export const statusManageFunction = (
  status: number,
  correstStatus: number,
  successMessage: string,
  errorMessage: string
) => {
  if (status === correstStatus) {
    toast.success(successMessage);
  } else toast.error(errorMessage);
};
