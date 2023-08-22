import { DefaultUser } from "next-auth";
import "next-auth/jwt";
import { TokenType } from "./types/Tokens";

interface IUser extends DefaultUser, TokenType {
  role: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User extends IUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
