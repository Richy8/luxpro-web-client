import type { Metadata } from "next";
import { AuthContainer, SocialButton } from "@/app/_components/(auth)";
import { LoginFormGroup } from "@/app/_components/(form-group)";

export const metadata: Metadata = {
  title: "Change your password",
};

const Login = () => {
  return (
    <>
      <AuthContainer title="Welcome Back!">
        {/* SOCIAL BUTTON */}
        <SocialButton />

        {/* FORM GROUP LAYER */}
        <LoginFormGroup />
      </AuthContainer>
    </>
  );
};

export default Login;
