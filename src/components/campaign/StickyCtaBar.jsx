import React, { useEffect, useState } from "react";
import { trackLead } from "./trackLead";

const StickyCtaBar = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShowStickyBar(true);
      } else if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!showStickyBar) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-black border-t border-white/20 z-50">
      <div className="h-[16vw] sm:h-[8vw] md:h-[5vw] px-[4vw] sm:px-[2vw] flex items-center justify-between">
        <p className="hidden md:block font-[heading2] tracking-wide text-[1.1vw] text-white/80">
          Limited founder spots each month
        </p>

        <a
          href="https://calendly.com/sales-wineemedia/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLead}
          className="viewall overflow-hidden effecttxt border border-white px-[5vw] sm:px-[2.5vw] md:px-[1.8vw] relative rounded-full py-[2vw] sm:py-[.9vw] md:py-[.55vw] text-white inline-flex items-center gap-[1vw] cursor-pointer w-full md:w-auto justify-center"
        >
          <div className="relative z-[10] overflow-hidden h-[4vw] sm:h-[2vw] md:h-[1.3vw] text-[2.6vw] sm:text-[1.4vw] md:text-[.95vw] font-[heading]">
            <h2 className="one capitalize whitespace-nowrap h-[4vw] sm:h-[2vw] md:h-[1.3vw] leading-[4vw] sm:leading-[2vw] md:leading-[1.3vw]">
              Book Your Founder Strategy Call
            </h2>
            <h2 className="one capitalize whitespace-nowrap h-[4vw] sm:h-[2vw] md:h-[1.3vw] leading-[4vw] sm:leading-[2vw] md:leading-[1.3vw]">
              Book Your Founder Strategy Call
            </h2>
          </div>
          <i className="ri-arrow-right-line relative z-[10] text-[3.5vw] sm:text-[1.6vw] md:text-[1vw]" />
          <div className="coverall transition-all duration-300 w-full h-full bg-white absolute left-1/2 -translate-x-1/2 top-full rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default StickyCtaBar;
