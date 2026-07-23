import React from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    label: "Step One",
    title: "Week 1. We Find Your Story.",
    body: "One conversation. We find what makes you different from every other founder in your space. Your authenticity becomes the foundation. We build everything around it.",
  },
  {
    number: "02",
    label: "Step Two",
    title: "Every Month. One Filming Session.",
    body: "You show up. We direct everything. You know exactly what to say. One guided conversation becomes twelve to twenty pieces of personal branding content for the month.",
  },
  {
    number: "03",
    label: "Step Three",
    title: "After the Session. We Handle Everything.",
    body: "We Handle Everything. Editing. Captions. Publishing. One approval from you. Content goes out every week. You do nothing else.",
  },
  {
    number: "04",
    label: "Step Four",
    title: "Month Two Onward. Paying Customers Follow.",
    body: "Month Two Onward. Paying Customers Follow. Strangers find your content. Watch. Trust the founder behind it. Reach out ready to work with you. Followers become paying customers. Every month stronger than the last.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw]">
      <SectionHeader title="How It Works" />

      <h3 className="font-[heading2] tracking-wide text-white text-[4vw] md:text-[2vw] mb-[8vw] sm:mb-[4vw] md:w-[70%]">
        One Session a Month From You. Everything Else Handled.
      </h3>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-[8vw] md:gap-0">
        {steps.map((step) => (
          <div
            key={step.number}
            className="w-full md:w-1/2 md:pr-[3vw] md:pb-[5vw]"
          >
            <div className="border-t border-white/20 pt-[4vw] sm:pt-[2vw]">
              <p className="font-[heading2] tracking-wide text-[3.5vw] sm:text-[1.5vw] md:text-[1.1vw] text-white/50 mb-[2vw] sm:mb-[1vw]">
                ({step.number}) {step.label}
              </p>
              <h4 className="font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] text-white mb-[2vw] sm:mb-[1vw]">
                {step.title}
              </h4>
              <p className="font-[heading2] tracking-wide text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] text-white md:w-[90%]">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
