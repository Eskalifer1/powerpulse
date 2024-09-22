import ConfirmationProvider from "@/components/Confirmation/ConfirmationProvider";
import Footer from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";
import { UserInfo } from "@/components/SideMenu/UserInfo";
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryClientProvider";
import { Spacer } from "@/uiKit/Spacer/style";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
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
  const t = await getTranslations({ locale, namespace: "MetaDataGlobal" });

  return {
    keywords: t("keywords"),
    robots: "index, follow",
  } as Metadata;
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <AuthProvider>
        <QueryProvider>
          <StyledComponentsRegistry>
            <NextIntlClientProvider messages={messages}>
              <ConfirmationProvider>
                <body className={poppins.className}>
                  <SideMenu>
                    <UserInfo />
                  </SideMenu>
                  {children}
                  <Spacer $size="2rem" />
                  <Footer />
                  <Toaster position="top-center" />
                </body>
              </ConfirmationProvider>
            </NextIntlClientProvider>
          </StyledComponentsRegistry>
        </QueryProvider>
      </AuthProvider>
    </html>
  );
}
