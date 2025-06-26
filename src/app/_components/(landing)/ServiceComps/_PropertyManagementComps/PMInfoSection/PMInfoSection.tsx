import React from "react";
import Image from "next/image";
import { PMImageOne } from "@/app/_assets";
import {
  TitleTopBlock,
  OutlineServiceCard,
  ListItemBlock,
} from "@/app/_components/(landing)";
import Link from "next/link";

interface IServiceFeatures {
  icon: string;
  title: string;
  description: string;
}

const serviceFeaturesData: IServiceFeatures[] = [
  {
    icon: "building-tree",
    title: "Property Inspection",
    description:
      "Regular inspections to ensure your property remains in pristine condition, with detailed reports and recommendations.",
  },
  {
    icon: "like-shapes",
    title: "Maintenance Coordination",
    description:
      "Proactive maintenance management with vetted contractors and service providers to address all property needs.",
  },
  {
    icon: "security-safe",
    title: "Regulatory Compliance",
    description:
      "Ensuring all local and state regulations are met, handling permits, inspections, and compliance issues.",
  },
  {
    icon: "level",
    title: "Renewal Management",
    description:
      "Tracking and handling all property-related renewals, certifications, and documentation to keep your property compliant.",
  },
  {
    icon: "box",
    title: "Tenant Relations",
    description:
      "Professional tenant interaction, addressing concerns, and ensuring property rules are followed by occupants.",
  },
  {
    icon: "receipt-to-money",
    title: "Financial Reporting",
    description:
      "Detailed financial statements, expense tracking, and transparent reporting on your property's performance.",
  },
];

const PMInfoSection = () => {
  return (
    <div className="pm-info-section">
      <div className="base-container">
        {/* TITLE TOP */}
        <TitleTopBlock
          title={
            <>
              Comprehensive{" "}
              <span className="text-main-primary">Property Management</span>{" "}
              Services
            </>
          }
          subtitle="We handle every aspect of managing your luxury property with meticulous attention to detail."
        />

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-[132px] md:mb-[100px]">
          {serviceFeaturesData.map((item, index: number) => (
            <OutlineServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* WHY SECTION */}
        <div className="flex md:flex-col justify-between md:justify-start items-center md:items-start mb-[132px] md:mb-[120px] md:gap-y-16">
          <div className="relative overflow-hidden rounded-3xl md:rounded-2xl w-[45%] md:w-full md:h-[380px]">
            <Image
              src={PMImageOne}
              alt="property-management"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[45%] md:w-full flex flex-col justify-center items-start">
            <div className="text-gray-800 text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] leading-[50px] lg:leading-[48px] md:leading-[42px] sm:leading-[40px] font-bold">
              Why Choose Our{" "}
              <span className="text-main-primary">Property Management</span>{" "}
              Services
            </div>

            <div className="content-text text-gray-400 mt-6">
              We deliver exceptional property management services tailored for
              luxury real estate owners who need professional oversight of their
              investments.
            </div>

            <ListItemBlock
              showTitle={false}
              listItems={[
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Dedicated property managers with extensive experience in luxury real estate",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Comprehensive inspection and maintenance protocols to preserve property value",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Thorough understanding of local regulations and compliance requirements",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "24/7 emergency response for property-related issues",
                },
                {
                  icon: "tick-circle text-gray-400/85",
                  text: "Transparent reporting and communication with property owners",
                },
              ]}
            />

            <Link
              href="/services/luxury-real-estate/property-management/service-request"
              className="btn btn-md btn-primary mt-8"
            >{`Let's Manage your Property`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMInfoSection;
