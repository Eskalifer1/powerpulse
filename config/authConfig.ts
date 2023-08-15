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

        return {
          id: "2",
          email: "artemkryt180@gmail.com",
          name: "artem",
          role: "admin",
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      // console.log(token, "token");
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
