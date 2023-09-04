import Footer from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";
import { UserInfo } from "@/components/SideMenu/UserInfo";
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryClientProvider";
import { Spacer } from "@/uiKit/Spacer/style";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslator } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
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
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <AuthProvider>
        <QueryProvider>
          <StyledComponentsRegistry>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <body className={poppins.className}>
                <SideMenu>
                  <UserInfo />
                </SideMenu>
                {children}
                <Spacer $size="2rem" />
                <Footer />
                <Toaster position="top-center" />
              </body>
            </NextIntlClientProvider>
          </StyledComponentsRegistry>
        </QueryProvider>
      </AuthProvider>
    </html>
  );
}
