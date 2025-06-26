import type { Metadata } from "next";
import { AuthContainer } from "@/app/_components/(auth)";
import { ForgotPasswordFormGroup } from "@/app/_components/(form-group)";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPassword = () => {
  return (
    <>
      <AuthContainer
        title="Password Recovery"
        description="Enter your email to recover your password"
        placeCenter
      >
        {/* FORM GROUP LAYER */}
        <ForgotPasswordFormGroup />
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
