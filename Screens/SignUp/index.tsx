import SignUpForm from "@/components/Forms/SignUpForm";
import { useTranslations } from "next-intl";
import { SignUpTitle } from "./style";

const SignUpScreen = () => {
  const t = useTranslations("SignUpForm");

  return (
    <>
      <SignUpTitle>{t("Title")}</SignUpTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpScreen;
