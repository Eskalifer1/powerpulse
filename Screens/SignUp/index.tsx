import SignUpForm from "@/components/Forms/SignUpForm";
import { DefalutMain } from "@/styles/DefaultMain";
import { DefalutTitleH1 } from "@/styles/DefaultTitle";
import { useTranslations } from "next-intl";

const SignUpScreen = () => {
  const t = useTranslations("SignUpForm");

  return (
    <DefalutMain>
      <DefalutTitleH1>{t("Title")}</DefalutTitleH1>
      <SignUpForm />
    </DefalutMain>
  );
};

export default SignUpScreen;
