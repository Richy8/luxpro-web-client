import React from "react";
import "./FAQCard.scss";

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  faqClicked: () => void;
}

const FAQCard = ({ question, answer, isOpen, faqClicked }: FAQCardProps) => {
  return (
    <div className="faq-card">
      <div className="faq-card--top" onClick={faqClicked}>
        <div className="faq-question">{question}</div>

        <div
          className={`icon icon-caret-down ${isOpen ? "rotate-180" : ""}`}
        ></div>
      </div>

      {isOpen && <div className="faq-card--bottom">{answer}</div>}
    </div>
  );
};

export default FAQCard;
