import type { Metadata } from "next";
import React, { Suspense } from "react";
import { AuthContainer } from "@/app/_components/(auth)";

export const metadata: Metadata = {
  title: "Email Sent",
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContainer
        title={`Let's confirm it's really you`}
        description="Please check your email for further instructions."
        placeCenter
      >
        <button className="btn btn-md btn-primary w-full mt-12">
          Check Email
        </button>
      </AuthContainer>
    </Suspense>
  );
};

export default VerifyEmail;
