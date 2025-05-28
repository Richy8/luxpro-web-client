"use client";

import React, { useState } from "react";
import { FAQCard, StackDisplayBlock } from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";
import { FaqImg } from "@/app/_assets";
import "./FAQSection.scss";

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
}

const initialFAQs: FAQCardProps[] = [
  {
    question: "How do I book an executive travel package?",
    answer:
      "Simply visit our Executive Travel page, choose your preferred package or request a custom plan, and fill out the form. Our team will contact you to confirm details and complete your booking.",
    isOpen: true,
  },
  {
    question: "Can I customize my travel experience?",
    answer:
      "Yes, we offer fully customizable travel experiences tailored to your preferences. You can specify destinations, accommodations, activities, and even dining preferences during the booking process.",
    isOpen: false,
  },
  {
    question: "What kind of luxury rentals do you offer?",
    answer:
      "We offer a curated selection of high-end rentals, including private villas, penthouses, yachts, and luxury cars, across major global destinations.",
    isOpen: false,
  },
  {
    question: "How do I request access to global events?",
    answer:
      "You can request access by filling out our Global Events form or contacting our concierge team directly. We provide access to exclusive events such as film festivals, fashion shows, sporting events, and more.",
    isOpen: false,
  },
  {
    question: "Can I invest through LuxPro?",
    answer:
      "Yes, we offer exclusive investment opportunities in luxury assets and curated ventures. Please contact our advisory team to learn more about current offerings.",
    isOpen: false,
  },
  {
    question: "What is Lifestyle Management at LuxPro?",
    answer:
      "Lifestyle Management at LuxPro refers to our personalized service where we handle day-to-day tasks, bookings, and special arrangements to help you live more effortlessly and luxuriously.",
    isOpen: false,
  },
  {
    question: "How do I book a call with your team?",
    answer:
      "You can schedule a call by visiting our Contact page and selecting a convenient time slot. Our team will confirm the appointment and be ready to assist you.",
    isOpen: false,
  },
  {
    question: "Is there a membership to access LuxPro services?",
    answer:
      "Yes, we offer tiered membership plans that provide varying levels of access to our services, including priority support, exclusive perks, and personalized management.",
    isOpen: false,
  },
  {
    question: "How soon will I get a response after submitting a request?",
    answer:
      "We strive to respond to all requests within 24 hours. Urgent requests are prioritized and typically handled much faster.",
    isOpen: false,
  },
  {
    question: "Can I manage my bookings and requests?",
    answer:
      "Yes, once you have an account with us, you can log in to your dashboard to view, manage, and modify all your bookings and service requests.",
    isOpen: false,
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQCardProps[]>(initialFAQs);

  const toggleFAQ = (index: number) => {
    setFaqs((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return { ...item, isOpen: false };
      })
    );
  };

  return (
    <div className="faq-section">
      <div className="base-container">
        <div className="faq-content">
          {/* LEFT SECTION */}
          <div className="left-section">
            <PageInfoRow
              pagePath={[{ itemText: "FAQ", itemLink: "" }]}
              title={
                <>
                  Frequently <span className="text-main-primary">Asked</span>{" "}
                  Questions
                </>
              }
            />

            {/* FAQ LIST */}
            <div className="faq-list mt-14">
              {faqs.map((faq, index) => (
                <FAQCard
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={faq.isOpen}
                  faqClicked={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right-section">
            <StackDisplayBlock imageSrc={FaqImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
