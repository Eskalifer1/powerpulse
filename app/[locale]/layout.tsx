import { SideMenu } from "@/components/SideMenu";
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";
import AuthProvider from "@/providers/AuthProvider";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslator } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "MetaDataGlobal");

  return {
    keywords: t("keywords"),
    robots: "index, follow",
  } as Metadata;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
    // let messages2 = (await import(`../../messages/${locale}.json`)).then(
    //   (module: any) => module.default
    // );
    // console.log(messages2);
  } catch (error) {
    notFound();
  }

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <AuthProvider>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <body className={poppins.className}>
              <SideMenu />
              {children}
            </body>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </AuthProvider>
    </html>
  );
}
