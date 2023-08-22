import { instance } from "@/api/instance";
import { SignUpFormType } from "@/types/Forms/SignUpForm";
import { LoginApiResponse, LoginServiceResponse } from "@/types/Response/login";
import { errorCatch } from "@/utils/functions/ErrorCatch";

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
      return response.status;
    } catch (error) {
      return errorCatch(error);
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
