import React, { Suspense } from "react";
import { BaseLayout } from "@/app/_components";

export default function BaseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Suspense>
        <BaseLayout>{children}</BaseLayout>
      </Suspense>
    </main>
  );
}
