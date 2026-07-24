import React from "react";
import { trackLead } from "./trackLead";

const CtaButtonLight = ({ id, label = "Book Your Founder Strategy Call", className = "" }) => {
  return (
    <a
      id={id}
      href="https://calendly.com/sales-wineemedia/30min"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackLead}
      className={`viewall overflow-hidden effecttxt border border-black px-[6vw] sm:px-[3vw] md:px-[2vw] relative rounded-full py-[2vw] sm:py-[1vw] md:py-[.7vw] text-black inline-flex items-center gap-[1vw] cursor-pointer ${className}`}
    >
      <div className="relative z-[10] overflow-hidden h-[4.5vw] sm:h-[2.3vw] md:h-[1.5vw] text-[2.8vw] sm:text-[1.6vw] md:text-[1.05vw] font-[heading]">
        <h2 className="one capitalize whitespace-nowrap h-[4.5vw] sm:h-[2.3vw] md:h-[1.5vw] leading-[4.5vw] sm:leading-[2.3vw] md:leading-[1.5vw]">
          {label}
        </h2>
        <h2 className="one capitalize whitespace-nowrap h-[4.5vw] sm:h-[2.3vw] md:h-[1.5vw] leading-[4.5vw] sm:leading-[2.3vw] md:leading-[1.5vw]">
          {label}
        </h2>
      </div>
      <i className="ri-arrow-right-line relative z-[10] text-[3.5vw] sm:text-[1.8vw] md:text-[1.1vw]" />
      <div className="coverall transition-all duration-300 w-full h-full bg-black absolute left-1/2 -translate-x-1/2 top-full rounded-full" />
    </a>
  );
};

export default CtaButtonLight;
