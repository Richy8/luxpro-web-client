import type { Metadata } from "next";
import React, { Suspense } from "react";
import { AuthContainer } from "@/app/_components/(auth)";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verify your account",
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContainer
        title={`Let's confirm it's really you`}
        description="Please check your email to verify your account."
        placeCenter
      >
        <button className="btn btn-md btn-primary w-full mt-12 mb-10">
          Check Email
        </button>

        <div className="flex justify-center items-start gap-x-2 mx-auto text-center text text-sm text-base-background">
          <div className="text">Already have an account?</div>
          <Link href="/login" className="text-sm">
            Log In
          </Link>
        </div>
      </AuthContainer>
    </Suspense>
  );
};

export default VerifyEmail;
