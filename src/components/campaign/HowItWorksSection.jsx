import React, { useEffect, useRef } from "react";
import SectionHeaderLight from "./SectionHeaderLight";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const stepContainers = containerRef.current.querySelectorAll(".step-container");

      stepContainers.forEach((step) => {
        const line = step.querySelector(".step-line");
        const content = step.querySelector(".step-content");

        if (line) {
          gsap.to(line, {
            width: "100%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          });
        }

        if (content) {
          gsap.from(content, {
            y: 40,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      const campaignParent = document.querySelector(".campaign_paren");
      const kndadc = document.querySelector(".kndadc");
      const problemRows = document.querySelectorAll(".problem-row");
      if (campaignParent) {
        gsap.to(campaignParent, {
          backgroundColor: "#ffffff",
          color: "#000000",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (kndadc) {
        gsap.to(kndadc, {
          color: "#000000",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (problemRows.length > 0) {
        gsap.to(problemRows, {
          borderColor: "rgba(0, 0, 0, 0.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw]">
      <SectionHeaderLight title="How It Works" />

      <h3 className="font-[heading2] tracking-wide  text-[4vw] md:text-[2vw] mb-[8vw] sm:mb-[4vw] md:w-[70%]">
        One Session a Month From You. Everything Else Handled.
      </h3>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-[8vw] md:gap-0">
        {steps.map((step) => (
          <div
            key={step.number}
            className="step-container w-full md:w-1/2 md:pr-[3vw] md:pb-[5vw]"
          >
            <div>
              <div className="w-full h-[1px] relative mb-[4vw] sm:mb-[2vw]">
                <div className="step-line absolute left-0 top-0 h-full bg-black/50 w-0" />
              </div>
              <div className="step-content">
                <p className="font-[heading2] tracking-wide text-[3.5vw] sm:text-[1.5vw] md:text-[1.1vw] text-black/80 mb-[2vw] sm:mb-[1vw]">
                  ({step.number}) {step.label}
                </p>
                <h4 className="font-[heading] tracking-wide text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] text-black mb-[2vw] sm:mb-[1vw]">
                  {step.title}
                </h4>
                <p className="font-[heading2] tracking-wide text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] text-black md:w-[90%]">
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

