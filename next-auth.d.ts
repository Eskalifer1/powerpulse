import { DefaultUser } from "next-auth";
import "next-auth/jwt";

export type Role = "admin" | "user";

interface IUser extends DefaultUser {
  role?: Role;
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
