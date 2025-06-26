import type { Metadata } from "next";
import React, { Suspense } from "react";
import Link from "next/link";
import { AuthContainer } from "@/app/_components/(auth)";

export const metadata: Metadata = {
  title: "Password reset successful",
};

const ResetPasswordSuccess = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContainer
        title={`Your Password Has Been Reset`}
        description="You can now log in with your new password and continue enjoying LuxPro services."
        placeCenter
      >
        <Link href="/login" className="btn btn-md btn-primary w-full mt-12">
          Go to Login
        </Link>
      </AuthContainer>
    </Suspense>
  );
};

export default ResetPasswordSuccess;
