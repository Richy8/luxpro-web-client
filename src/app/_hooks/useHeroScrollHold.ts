import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroScrollHold = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero section briefly
      //   ScrollTrigger.create({
      //     trigger: ".hero-section",
      //     start: "top top",
      //     end: "+=60%", // Adjust to control delay before scroll continues
      //     pin: true,
      //     scrub: true,
      //   });
      // Optional: animate hero text/image subtly during scroll
      //   gsap.to(".hero-container", {
      //     y: -80,
      //     opacity: 0.8,
      //     scrollTrigger: {
      //       trigger: ".hero-section",
      //       start: "top top",
      //       end: "+=60%",
      //       scrub: true,
      //     },
      //   });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);
};

export default useHeroScrollHold;
