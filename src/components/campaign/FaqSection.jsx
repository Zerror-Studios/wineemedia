import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqData = [
  {
    q: "I tried posting before and got nothing. How is this different?",
    a: "The problem was never you. It was no system behind it. We build a complete personal branding system from your story outward. Every week. Every month. Paying customers compounding over time.",
  },
  {
    q: "How much of my time does this take?",
    a: "One filming session per month. One approval. Sixty to ninety minutes total. Everything else handled.",
  },
  {
    q: "Does this work for my type of business?",
    a: "Yes. Paying customers buy from people they trust. A founder who shows up consistently builds that trust faster than any ad, regardless of what they sell.",
  },
  {
    q: "How long before paying customers start coming in?",
    a: "Month one is foundation. Month two is momentum. Month three is when paying customers start reaching out before any conversation happens.",
  },
  {
    q: "I am not comfortable on camera. Will this still work?",
    a: "Every founder becomes comfortable the moment they know what to say and someone is directing the session. Your authenticity on camera is your biggest asset. We build around it.",
  },
  {
    q: "I already have an agency posting on my brand account. Why is this different?",
    a: "A brand account builds awareness. It does not build trust in a person. A founder speaking directly, their story, their belief, their paying customer results, is what turns a stranger into a paying customer. A brand post never does that.",
  },
  {
    q: "What if I have no audience at all right now?",
    a: "That is exactly where every founder we have worked with started. Zero followers. Zero presence. Personal branding works precisely because it builds the audience from scratch, and every month that audience grows into paying customers.",
  },
  {
    q: "What makes a paying customer trust a founder they have never met?",
    a: "Consistency. A stranger who watches a founder show up every week for a month feels like they already know that person. That familiarity becomes trust. That trust becomes a paying customer who arrives already decided.",
  },
];

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <section className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw]">
      <SectionHeader
        title="FAQ"
        fullWidthLine
        contentClassName="w-full sm:w-[63%] md:w-[70%] lg:w-[60%]"
      />

      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[63%] md:w-[70%] lg:w-[60%]">
          <h3 className="font-[heading2] tracking-wide text-white text-[4vw] md:text-[2vw] mb-[2vw] sm:mb-[1vw]">
            Questions Founders Ask.
          </h3>
          <p className="font-[heading2] tracking-wide text-[3.5vw] sm:text-[1.6vw] md:text-[1.2vw] text-white/50 mb-[8vw] sm:mb-[4vw]">
            Deep Insight Into the Personal Branding System
          </p>

          <div className="w-full">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-t border-white/20">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left py-[5vw] sm:py-[2.2vw] flex items-start justify-between gap-[3vw] cursor-pointer"
                  >
                    <span className="font-[heading] tracking-wide text-[3.8vw] sm:text-[1.7vw] md:text-[1.35vw] text-white w-[90%]">
                      {faq.q}
                    </span>
                    <i
                      className={`ri-arrow-down-s-line text-[5vw] sm:text-[2vw] md:text-[1.4vw] text-white transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "max-h-[60vw] sm:max-h-[18vw] pb-[5vw] sm:pb-[2.2vw]"
                        : "max-h-0"
                    }`}
                  >
                    <p className="font-[heading2] tracking-wide text-[3.8vw] sm:text-[1.6vw] md:text-[1.2vw] xl:text-[1.1vw] text-white/80 w-[95%] sm:w-[90%]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
