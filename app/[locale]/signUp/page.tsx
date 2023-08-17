import SignUpScreen from "@/Screens/SignUp";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, "SignUpForm.Metadata");

  return {
    title: t("Title"),
  };
}

const SignUpPage = () => {
  return <SignUpScreen />;
};

export default SignUpPage;
