import type { Metadata } from "next";
import { AuthContainer, SocialButton } from "@/app/_components/(auth)";
import { SignupFormGroup } from "@/app/_components/(form-group)";

export const metadata: Metadata = {
  title: "Create a LuxPro account",
};

const CreateAccount = () => {
  return (
    <>
      <AuthContainer title="Welcome to LuxPro">
        {/* SOCIAL BUTTON */}
        <SocialButton isLogin={false} />

        {/* FORM GROUP LAYER */}
        <SignupFormGroup />
      </AuthContainer>
    </>
  );
};

export default CreateAccount;
