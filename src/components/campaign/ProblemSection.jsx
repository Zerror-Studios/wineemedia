import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    number: "1",
    title:
      "The competitor with a weaker business is getting your paying customers.",
    body: "Same space. Weaker work. But they show up every week and you do not. Visibility beats quality every single time.",
  },
  {
    number: "2",
    title: "Every paying customer still has to be convinced from scratch.",
    body: "No trust before the first conversation. Every sale starts from zero. A founder with personal branding working for them does not have this problem. Paying customers arrive already decided.",
  },
  {
    number: "3",
    title: "Every paying customer comes from referrals or ads.",
    body: "Referrals dry up. Ads stop the moment you stop paying. Personal branding keeps working. Every month stronger than the last.",
  },
  {
    number: "4",
    title: "You tried posting and it did not work.",
    body: "You posted. Got nothing. Stopped. The problem was never you. It was no system behind it.",
  },
];

const ProblemSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const rows = containerRef.current.querySelectorAll(".problem-row");

      rows.forEach((row) => {
        const num = row.querySelector(".problem-num");
        if (!num) return;

        gsap.from(num, {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw]">
      <SectionHeader
        title="The Problem"
        fullWidthLine
        contentClassName="w-full sm:w-[63%] md:w-[73%] lg:w-[63%]"
      />

      <div className="w-full flex justify-center">
        <div className="w-full sm:w-[63%] md:w-[73%] lg:w-[63%]">
          <h3 className="font-[heading2] tracking-wide text-white text-[4vw] md:text-[2vw] mb-[5vw] sm:mb-[3vw]">
            The Problem Is Not Your Business. Nobody Outside Your Network Knows
            It Exists.
          </h3>

          <p className="font-[heading2] tracking-wide text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] text-white mb-[8vw] sm:mb-[4vw]">
            Right now a paying customer is searching for what you offer. They
            find your competitor first. Not because that competitor is better.
            Because they have personal branding working for them and you do not.
          </p>
        </div>
      </div>

      <div className=" kndadc w-full text-white py-[6vw] sm:py-[2vw] sm:px-0">
        {problems.map((item, index) => (
          <div
            key={item.number}
            className={`problem-row w-full ${index !== problems.length - 1 ? "border-b border-white/20" : ""
              } flex items-center flex-col sm:flex-row justify-center py-[5vw]`}
          >
            <div className="flex w-full flex-col sm:flex-row items-start justify-center">
              <div className="w-full sm:w-[13%] overflow-hidden">
                <span className="problem-num inline-block text-[15vw] sm:text-[8vw] font-[heading2] leading-none">
                  {item.number}
                </span>
              </div>
              <div className="w-full sm:w-[50%] md:w-[60%] lg:w-[50%]">
                <h4 className="text-[6vw] my-[2vw] sm:my-0 md:text-[3vw] lg:text-[2vw] font-[heading] leading-none">
                  {item.title}
                </h4>
                <p className="text-[4vw] sm:text-[2vw] md:text-[1.8vw] font-[heading2] tracking-wide lg:text-[1.3vw] xl:text-[1.2vw] mt-[.8vw]">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;

