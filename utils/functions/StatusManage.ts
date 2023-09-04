import { toast } from "react-hot-toast";

export const statusManageFunction = (
  status: number,
  correctStatus: number,
  successMessage: string
) => {
  if (status === correctStatus) toast.success(successMessage);
};
