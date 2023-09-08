import { instance } from "@/apiFolder/instance";
import { AuthService } from "@/services/Auth";
import { LoginServiceResponse } from "@/types/Response/login";
import { TokenType } from "@/types/Tokens";
import type { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<any> {
  const res = await instance.post<TokenType>(
    "auth/login/access-token",
    {},
    {
      headers: {
        Authorization: `Bearer ${token.refreshToken}`,
      },
    }
  );

  console.log("refreshed");
  console.log(res.data);
  return res.data;
}

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const userData = (await AuthService.login({
          email: credentials?.email,
          password: credentials.password,
        })) as LoginServiceResponse;

        if (userData.status !== 201) return null;

        return {
          id: userData.data.user._id,
          email: userData.data.user.email,
          name: userData.data.user.name,
          role: userData.data.user.role || "user",
          accessToken: userData.data.accessToken,
          refreshToken: userData.data.refreshToken,
          expiresIn: userData.data.expiresIn,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.expiresIn = token.expiresIn;
      }
      return session;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresIn = user.expiresIn;
      }
      if (new Date().getTime() > token.expiresIn) {
        const data = await refreshToken(token);
        token.accessToken = data.access;
        token.refreshToken = data.refresh;
        token.expiresIn = data.expiresIn;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
