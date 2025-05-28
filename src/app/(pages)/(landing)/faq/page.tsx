import React from "react";
import { FAQSection, VideoCTASection } from "@/app/_components/(landing)";
import { CTACard } from "@/app/_components/(shared)";

const FAQPage = () => {
  return (
    <>
      <FAQSection />
      <CTACard
        title={
          <>
            Still Have <span className="text-main-primary">Questions?</span>
          </>
        }
        description={
          "We’re here to help. Reach out to us anytime at info@luxpro.vip or use our Contact Page to get in touch with our team."
        }
        btnText={"Contact Us"}
        btnLink={"/contact"}
      />

      <VideoCTASection />
    </>
  );
};

export default FAQPage;
