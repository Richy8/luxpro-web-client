import type { Metadata } from "next";
import React, { Suspense } from "react";
import { AuthContainer } from "@/app/_components/(auth)";

export const metadata: Metadata = {
  title: "Account verified",
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContainer
        title={`Welcome to LuxPro`}
        description="Your account has been created successfully! You can now access your dashboard, explore services, and manage your bookings."
        placeCenter
      >
        <button className="btn btn-md btn-primary w-full mt-12">
          Go to my Dashboard
        </button>
      </AuthContainer>
    </Suspense>
  );
};

export default VerifyEmail;
