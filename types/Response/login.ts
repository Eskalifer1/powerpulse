import { TokenType } from "../Tokens";

export type UserType = {
  email: string;
  name: string;
  role: string;
  _id: string;
};

export interface LoginApiResponse extends TokenType {
  user: UserType;
}

export interface LoginServiceResponse {
  data: LoginApiResponse;
  status: number;
}
