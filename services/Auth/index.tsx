import { instance } from "@/apiFolder/instance";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { ResponseError } from "@/types/Response/api";
import { LoginApiResponse, LoginServiceResponse } from "@/types/Response/login";
import { ResponseEnum } from "@/utils/enum/ResponseStatus";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

type LoginType = {
  email: string;
  password: string;
};

export const AuthService = {
  async signUp({ email, name, password }: SignUpFormType) {
    try {
      const response = await instance.post("auth/signup", {
        email,
        name,
        password,
      });
      if (response.status === ResponseEnum.CREATED) {
        toast.success("Account has been successfully created");
      }
      return response;
    } catch (e) {
      const error = e as AxiosError<ResponseError>;
      const errorMessage =
        error.response?.data?.message[0] || "An error occurred";
      toast.error(errorMessage);
    }
  },
  async login({ email, password }: LoginType) {
    try {
      const response = await instance.post<LoginApiResponse>("auth/login", {
        email,
        password,
      });
      return {
        status: response.status,
        data: response.data,
      } as LoginServiceResponse;
    } catch (error) {
      return error;
    }
  },
};
