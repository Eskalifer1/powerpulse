import SignUpScreen from "@/Screens/SignUp";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "SignUpForm.Metadata");

  return {
    title: t("Title"),
    description: t("Description"),
  } as Metadata;
}

const SignUpPage = () => {
  return <SignUpScreen />;
};

export default SignUpPage;
