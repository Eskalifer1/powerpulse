import { AuthService } from "@/services/Auth";
import { LoginServiceResponse } from "@/types/Response/login";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    //   profile(profile: GoogleProfile) {
    //     return {
    //       ...profile,
    //       role: profile.role ?? "user",
    //       image: profile.picture,
    //       id: "2",
    //     };
    //   },
    // }),
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
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
