import { getToken } from "next-auth/jwt";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "uk"];
const privatePages = [
  "/exercises",
  "/exercises/:path*",
  "/workout",
  "/workout/:path*",
];
const deniedPageForAuthorized = ["/signUp"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "uk",
  localePrefix: "always",
});

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

// const authMiddleware = withAuth(
//   function middleware(request: NextRequestWithAuth) {
//     if (
//       forbiddenPaths.some(path => request.nextUrl.pathname.startsWith(path)) &&
//       !request.nextauth.token?.role
//     ) {
//       return NextResponse.redirect(new URL("/denied", request.url));
//     }
//     return intlMiddleware(request);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token || !token,
//     },
//   }
// );

// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
//     "i"
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     return (authMiddleware as any)(req);
//   }
// }

export default function middleware(req: NextRequest) {
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
