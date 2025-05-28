import React from "react";
import {
  InfoSquareCard,
  ListItemBlock,
  OutlineServiceCard,
  GEEventSection,
  TitleTopBlock,
} from "@/app/_components/(landing)";
import { AnimatedImage } from "@/app/_components/(shared)";
import {
  GEImageOne,
  GEImageTwo,
  GEImageThree,
  GEImageSeven,
} from "@/app/_assets";
import "./GEInfoSection.scss";

const GEInfoSection = () => {
  const infoList = [
    {
      imageSrc: GEImageOne,
      title: "Access the World's Biggest Events",
      description:
        "From private suites at sports finals to red carpet premieres, we secure your place at the most exclusive global occasions.",
    },
    {
      imageSrc: GEImageTwo,
      title: "Private Experiences, Just for You",
      description:
        "Enjoy member-only access to select events, with personalized service that makes every moment unforgettable.",
    },
    {
      imageSrc: GEImageThree,
      title: "Stay Connected to Every Occasion",
      description:
        "With our curated event updates, you’ll never miss out on the experiences that matter most to you, wherever they happen.",
    },
  ];

  const featureList = [
    {
      icon: "like-shapes",
      title: "Priority Ticketing",
      description: "VIP seating and exclusive access",
    },
    {
      icon: "building-tree",
      title: "Luxury Accommodations",
      description: "5-star hotels or private apartments",
    },
    {
      icon: "car",
      title: "Private Transportation",
      description: "Chauffeur service or private jet",
    },
    {
      icon: "tag-user",
      title: "Personal Concierge",
      description: "24/7 dedicated service during your stay",
    },
    {
      icon: "box",
      title: "Elite Networking",
      description: "Access to exclusive social circles",
    },
    {
      icon: "presentation-chart",
      title: "Business Summits",
      description: "Global forums, tech conferences",
    },
  ];

  return (
    <div className="ge-info-section">
      <div className="base-container">
        {/* TITLE TOP */}
        <TitleTopBlock description="Get fast and exclusive access to some of the world's greatest sporting, entertainment, and business events." />

        {/* INFO SECTION */}
        <div className="grid grid-cols-3 gap-x-6 mb-[140px]">
          {infoList.map((info, index: number) => (
            <InfoSquareCard
              key={index}
              imageSrc={info.imageSrc}
              title={info.title}
              description={info.description}
            />
          ))}
        </div>
      </div>

      {/* FEATURES LIST */}
      <div className="base-container">
        <div className="top-area">
          <div className="title-text">
            {`What's `}
            <span className="text-main-primary">Included</span>
          </div>
          <div className="subtitle-text">
            We handle everything from tickets and accommodation to personal
            transportation and concierge services.
          </div>
        </div>

        <div className="base-area">
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

      <>
        <div className="base-container top-area">
          <div className="title-text">
            {`Upcoming `}
            <span className="text-main-primary">Events</span>
          </div>
          <div className="subtitle-text">
            Browse a selection of exclusive events where we can arrange VIP
            access and bespoke experiences.
          </div>
        </div>

        <GEEventSection />
      </>

      <div className="base-container">
        <div className="ge-content-info-block">
          <div className="ge-left-block">
            <div className="ge-image-card">
              <AnimatedImage
                src={GEImageSeven}
                alt="service-info"
                animationType="soft-zoom"
              />
            </div>
          </div>

          <div className="ge-right-block">
            <div className="title-text">
              Exclusive Access to{" "}
              <span className="text-main-primary">World-Class Events</span>{" "}
            </div>

            <ListItemBlock
              showTitle={false}
              listItems={[
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Sports Events - World Cup, Formula 1, Olympics, Champions League",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Entertainment - Award Shows, Movie Premieres, Music Festivals",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Fashion Weeks - Paris, Milan, New York",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Business Summits - Global Forums, Tech Conferences",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Private Auctions - Art Basel, Sotheby's, Christie's",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GEInfoSection;
