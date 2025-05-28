import React from "react";
import {
  InfoSquareCard,
  InfoDataCardRow,
  TitleTopBlock,
} from "@/app/_components/(landing)";
import {
  LMImageOne,
  LMImageTwo,
  LMImageThree,
  LMImageFour,
  LMImageFive,
} from "@/app/_assets";

const LMInfoSection = () => {
  const infoList = [
    {
      imageSrc: LMImageOne,
      title: "Personal Luxury Shopping",
      description:
        "Our membership is the gift that keeps on giving. We secure exclusive items from coveted sneakers for superfans to bespoke Rolexes for anniversaries, tailored to your every desire.",
    },
    {
      imageSrc: LMImageTwo,
      title: "Gifting and Sourcing Luxury Items",
      description:
        "From hunting down rare art to sourcing a bespoke Rolex, we take the stress out of every special occasion with personal shopping that has you covered.",
    },
    {
      imageSrc: LMImageThree,
      title: "Making the Unique and Unusual Possible",
      description:
        "Ever dreamt of dining on an iceberg or playing polo on a camel? With us, no request is too out of the ordinary, your wildest ideas become memorable experiences.",
    },
  ];

  const serviceList = [
    {
      title: "Personal Luxury Shopping",
      description:
        "Looking for something exclusive? From designer fashion to rare collectibles, our team will find exactly what you desire. Simply share your wish, and we’ll handle the rest sourcing, securing, and delivering luxury items straight to you.",
      imageSrc: LMImageFour,
    },
    {
      title: "Premium Gifts Sourcing",
      description:
        "Need the perfect gift for a special occasion? Whether it’s a bespoke watch, limited-edition art, or rare accessories, we take care of every detail to make sure your gift is as exceptional as the person receiving it.",
      imageSrc: LMImageFive,
    },
  ];

  return (
    <div className="lm-info-section">
      <div className="base-container">
        {/* TITLE TOP */}
        <TitleTopBlock description="Through our extensive network, we offer this across multiple locations across the globe. Whatever concierge needs you may have, we are just a click away." />

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

        {/* SERVICE SECTION */}
        <div className="flex flex-col justify-start items-center gap-y-20 mb-7">
          {serviceList.map((service, index: number) => (
            <InfoDataCardRow
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              actionCTA="Request Services"
              actionCTALink="/services/lifestyle-management/service-request"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LMInfoSection;
