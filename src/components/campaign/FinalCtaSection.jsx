import React from "react";
import SectionHeaderLight from "./SectionHeaderLight";
import CtaButtonLight from "./CtaButtonLight";

const FinalCtaSection = () => {
  return (
    <section
      id="booking-section"
      className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw] pb-[14vw] sm:pb-[8vw]"
    >
      <SectionHeaderLight
        title="Book a Call"
        fullWidthLine
        contentClassName="w-full sm:w-[63%] md:w-[70%] lg:w-[60%]"
      />

      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[63%] md:w-[70%] lg:w-[60%]">
          <h3 className="font-[heading2] tracking-wide text-black text-[4vw] md:text-[2vw] mb-[5vw] sm:mb-[3vw]">
            You Have Built a Good Business. Now Build the Personal Brand That
            Scales It.
          </h3>

          <p className="font-[heading2] tracking-wide text-[4vw] sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1.25vw] text-black mb-[3vw] sm:mb-[1.5vw]">
            Right now a founder in your space is building an audience, earning
            trust, and turning followers into paying customers, before those
            people ever find you. That gap widens every single month.
          </p>

          <p className="font-[heading] tracking-wide text-[4vw] sm:text-[1.8vw] md:text-[1.4vw] text-black mb-[8vw] sm:mb-[4vw]">
            One conversation changes that.
          </p>

          <CtaButtonLight id="final-section-cta" />

          <div className="mt-[8vw] sm:mt-[4vw] border-t border-black/20 pt-[4vw] sm:pt-[2vw]">
            <p className="font-[heading2] tracking-wide text-[3.8vw] sm:text-[1.5vw] md:text-[1.15vw] text-black mb-[2vw] sm:mb-[1vw]">
              On the call we look at your business, your story, and exactly what
              your personal brand could look like in 90 days.
            </p>
            <p className="font-[heading2] tracking-wide text-[3.5vw] sm:text-[1.4vw] md:text-[1.05vw] text-black/50">
              We take a limited number of new founders each month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
