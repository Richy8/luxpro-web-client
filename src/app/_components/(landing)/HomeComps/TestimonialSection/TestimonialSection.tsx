import React from "react";
import { TestimonialCard } from "@/app/_components/(landing)";
import "./TestimonialSection.scss";

interface ITestimonialCard {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
}

const testimonials: ITestimonialCard[] = [
  {
    name: "Victoria Reynolds",
    role: "Fashion Designer",
    testimonial:
      "From the moment we engaged with LuxPro, everything was handled with discretion and elegance. Their yacht charter service exceeded all expectations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200&h=200&fit=crop",
  },
  {
    name: "Jonathan Chambers",
    role: "CEO, Global Ventures",
    testimonial:
      "LuxPro transformed our travel experience. The attention to detail and personalized service was simply unmatched in the industry.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
  {
    name: "Alexander Wei",
    role: "Tech Entrepreneur",
    testimonial:
      "As someone who values privacy and exceptional service, LuxPro has become my only choice for travel arrangements. Simply the best in class.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
  },
  {
    name: "Sofia Loren",
    role: "Luxury Real Estate Agent",
    testimonial:
      "No one does luxury quite like LuxPro. Every detail was perfect and made me feel valued. Highly recommended for top-tier clientele.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      {/* TOP SECTION */}
      <div className="base-container top-section">
        <div className="title-text">
          We have been the{" "}
          <span className="text-main-primary">talk of the town lately</span>
        </div>
      </div>

      {/* BASE SECTION */}
      <div className="base-section">
        {/* SCROLLING CAROUSEL SECTION */}
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {[...Array(2)].flatMap((_, i) =>
              testimonials.map((item, index) => (
                <TestimonialCard key={`card-${i}-${index}`} {...item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
