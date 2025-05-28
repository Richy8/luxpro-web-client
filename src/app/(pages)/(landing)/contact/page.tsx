import React from "react";
import { ContactSection, VideoCTASection } from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components/(shared)";

const ContactPage = () => {
  return (
    <>
      <ContactSection />
      <CTACard
        title={
          <>
            Need Quick <span className="text-main-primary">Answers?</span>
          </>
        }
        description={
          "Before you reach out, check our FAQ Page for quick answers to common questions."
        }
        btnText={"Check FAQ"}
        btnLink={"/faq"}
      />
      <VideoCTASection />
    </>
  );
};

export default ContactPage;
