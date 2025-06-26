import type { Metadata } from "next";
import { AuthContainer } from "@/app/_components/(auth)";
import { ResetPasswordFormGroup } from "@/app/_components/(form-group)";

export const metadata: Metadata = {
  title: "Reset your password",
};

const ResetPassword = () => {
  return (
    <>
      <AuthContainer title="Change Password" placeCenter>
        {/* FORM GROUP LAYER */}
        <ResetPasswordFormGroup />
      </AuthContainer>
    </>
  );
};

export default ResetPassword;
