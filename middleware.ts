import { getToken } from "next-auth/jwt";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export const locales = ["en", "uk"];
const privatePages = [
  "/exercises",
  "/exercises/:path*",
  "/workout",
  "/workout/:path*",
];
const deniedPageForAuthorized = ["/signUp"];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
  async function onSuccess(req: NextRequestWithAuth) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;

    const currentLanguage = req.nextUrl.pathname.split("/")[1];

    if (
      deniedPageForAuthorized.some((page) =>
        req.nextUrl.pathname.startsWith(`/${currentLanguage}${page}`)
      ) &&
      isAuthenticated
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (
      privatePages.some((page) =>
        req.nextUrl.pathname.startsWith(`/${currentLanguage}${page}`)
      ) &&
      !isAuthenticated
    ) {
      return NextResponse.redirect(
        new URL(`/${currentLanguage}/denied`, req.url)
      );
    }
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token || !token,
    },
  }
);

export default function middleware(req: NextRequest) {
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
