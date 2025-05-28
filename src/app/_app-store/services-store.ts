import { create } from "zustand";
// import { apiUtil } from "@/app/_utils";
import {
  ETPackage1of1,
  ETPackage1of2,
  ETPackage1of3,
  ETPackage2of1,
  ETPackage2of2,
  ETPackage2of3,
  LVImageFive,
  LVImageFour,
  LVImageOne,
  GEImageFour,
  GEImageEight,
  GEImageNine,
} from "@/app/_assets";
import { IServiceStore } from "@/app/_types/store-type";

const routes = {};

const executiveTravelData = [
  {
    id: 1,
    title: "Elite Package",
    slug: "elite-package",
    subtitle:
      "Premium executive travel experience with top-tier accommodations and services.",
    description:
      "The Elite Package offers a premium executive travel experience with business class flights, a luxurious 3-bedroom apartment, and top-tier vehicles like a Rolls Royce. Enjoy 24/7 concierge support and regular security, ensuring comfort, exclusivity, and peace of mind throughout your journey.",
    features: [
      { icon: "airplane", text: "Business Class Ticket" },
      { icon: "building", text: "3-Bedroom Luxury Apartment" },
      { icon: "car", text: "Premium Vehicle Options Including Rolls Royce" },
      { icon: "security-user", text: "Regular Security Available" },
      { icon: "home-trend-up", text: "24/7 Concierge Support" },
    ],

    amount: "$15,000",
    tax: "$20",
    service_fee: "$0",
    images: [ETPackage1of1, ETPackage1of2, ETPackage1of3],
  },
  {
    id: 2,
    title: "Sapphire Package",
    slug: "sapphire-package",
    subtitle: "Unparalleled luxury for those who demand the absolute best.",
    description:
      "The Sapphire Package delivers an elevated executive travel experience with first-class flights, a lavish 5-bedroom penthouse, and premium vehicles like a Rolls Royce. Enjoy VIP concierge services and armed security, ensuring the highest level of luxury, privacy, and peace of mind.",
    features: [
      { icon: "airplane", text: "First Class Ticket" },
      { icon: "building", text: "5-Bedroom Penthouse Luxury Apartment" },
      { icon: "car", text: "Premium Vehicle Options Including Rolls Royce" },
      { icon: "security-user", text: "Armed Security Available" },
      { icon: "home-trend-up", text: "VIP Concierge Services and Support" },
    ],

    amount: "$35,000",
    tax: "$64",
    service_fee: "$0",
    images: [ETPackage2of1, ETPackage2of2, ETPackage2of3],
  },
];

const luxuryVacationData = [
  {
    id: 1,
    title: "Dubai Business Oasis",
    slug: "dubai-business-oasis",
    subtitle: "",
    description:
      "An exclusive resort stay with state-of-the-art meeting facilities, team-building activities, gourmet dining, and a custom itinerary featuring iconic spots like the Burj Khalifa and a thrilling desert safari.",
    serviceInfo: [
      { icon: "calendar", text: "Travel Date - 04/11/2025" },
      { icon: "location", text: "Destination - Japan, Italy, or Morocco" },
    ],
    features: [
      { icon: "airplane", text: "Business Class Ticket" },
      { icon: "building", text: "3-Bedroom Luxury Apartment" },
      { icon: "car", text: "Premium Vehicle Options Including Rolls Royce" },
      { icon: "security-user", text: "Regular Security Available" },
      { icon: "home-trend-up", text: "24/7 Concierge Support" },
    ],
    amount: "$25,000",
    tax: "$14",
    service_fee: "$0",
    images: [LVImageOne, LVImageFour, LVImageFive],
  },
];

const globalEventData = [
  {
    id: 1,
    title: "Monaco Grand Prix",
    slug: "monaco-grand-prix",
    subtitle: "",
    description:
      "Enjoy VIP paddock access, luxury yacht viewing, and private transfers throughout the weekend.",
    serviceInfo: [
      { icon: "calendar", text: "Event Date - 04/11/2025" },
      { icon: "location", text: "Destination - Morocco" },
    ],
    features: [
      { icon: "checkmark", text: "Duration: 5 Days / 4 Nights" },
      { icon: "checkmark", text: "VIP airport services and transfers" },
      { icon: "checkmark", text: "Luxury accommodations for all stay" },
      { icon: "checkmark", text: "Daily breakfast and selected meals" },
      { icon: "checkmark", text: "Cultural workshops and experiences" },
    ],
    amount: "15,000",
    tax: "$14",
    service_fee: "$0",
    images: [GEImageFour, GEImageEight, GEImageNine],
  },
];

export const useServiceStore = create<IServiceStore>(() => ({
  getAllExecutiveTravels: () => {
    return executiveTravelData;
  },

  getExecutiveTravelBySlug: (slug: string) => {
    return executiveTravelData.find((item) => item.slug === slug);
  },

  getLuxuryVacationBySlug: () => {
    return luxuryVacationData[0];
    // return luxuryVacationData.find((item) => item.slug === slug);
  },

  getGlobalEventBySlug: () => {
    return globalEventData[0];
    // return globalEventData.find((item) => item.slug === slug);
  },
}));
