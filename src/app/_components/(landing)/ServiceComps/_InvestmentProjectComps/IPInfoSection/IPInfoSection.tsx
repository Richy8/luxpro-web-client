import React from "react";
import {
  InfoDataCardRow,
  OutlineServiceCard,
  TitleTopBlock,
  TestimonialCard,
} from "@/app/_components/(landing)";
import { IPImageOne, IPImageTwo, IPImageThree } from "@/app/_assets";
import "./IPInfoSection.scss";

interface ITestimonialCard {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
}

const IPInfoSection = () => {
  const serviceList = [
    {
      title: "Retirement Investment Package",
      subtitle: "Plan today for the lifestyle you deserve tomorrow.",
      description:
        "Secure your future with safe, high-yield investment options built for long-term growth and stability. From prime real estate to income-generating assets, we help you build a reliable, rewarding portfolio.",
      imageSrc: IPImageOne,
    },
    {
      title: "Global Investment Tours",
      subtitle: "See opportunities up close, worldwide.",
      description:
        "Travel to leading markets with our expert advisors. Explore premium real estate, private businesses, and exclusive projects in person, and make informed decisions with full confidence.",
      imageSrc: IPImageTwo,
    },
    {
      title: "Global Projects",
      subtitle: "Be part of high-impact ventures.",
      description:
        "Access exclusive global projects across sectors like tech, energy, and luxury markets. These are handpicked for forward-thinking investors looking to make a smart, global impact.",
      imageSrc: IPImageThree,
    },
  ];

  const featureList = [
    {
      icon: "verify",
      title: "Global Market Access",
      description:
        "Opportunities across premium markets that are typically difficult to access.",
    },
    {
      icon: "verify",
      title: "Personal Advisor Support",
      description:
        "Every member is assigned a dedicated investment advisor to guide your decisions.",
    },
    {
      icon: "verify",
      title: "Secure Transactions",
      description:
        "Comprehensive security and discretion for all your investment activities.",
    },
  ];

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

  return (
    <div className="ip-info-section">
      <div className="base-container">
        {/* TITLE TOP */}
        <TitleTopBlock description="These investments provide unique advantages to our discerning members to access smart investment opportunities across the world in different markets, including real estate, gaming, jewelry, boating and entertainment." />

        {/* SERVICE SECTION */}
        <div className="flex flex-col justify-start items-center gap-y-20 mb-[120px] sm:mb-[100px]">
          {serviceList.map((service, index: number) => (
            <InfoDataCardRow
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              actionCTA="I'm Interested"
              actionCTALink="/services/investments-projects/service-request"
            />
          ))}
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="base-container">
        <div className="mb-12">
          <div className="section-title-text">
            Why Choose LuxPro for{" "}
            <span className="text-main-primary">Your Investments</span>
          </div>
        </div>

        <div className="base-card-area">
          {featureList.map((feature, index: number) => (
            <OutlineServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="base-container">
        <div className="mb-14">
          <div className="section-title-text">
            Other Investors{" "}
            <span className="text-main-primary">Success Stories</span>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL LIST */}
      <div className=" mb-[100px]">
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {[...Array(2)].flatMap((_, i) =>
              testimonials.map((item, index) => (
                <TestimonialCard
                  key={`card-${i}-${index}`}
                  {...item}
                  theme="dark"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPInfoSection;
