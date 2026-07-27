import React, { useEffect, useRef } from "react";
import CtaButton from "./CtaButton";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current || !paraRef.current) return;

    document.fonts.ready.then(() => {
      const headingSplit = SplitText.create(headingRef.current, {
        type: "chars, words, lines",
        linesClass: "line-mask",
      });

      const paraSplit = SplitText.create(paraRef.current, {
        type: "chars, words, lines",
        linesClass: "line-mask",
      });

      const tl = gsap.timeline();

      tl.from(headingSplit.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 0.2,
        },
        delay: 0.5,
      })
        .from(
          paraSplit.lines,
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.8,
            stagger: {
              amount: 0.2,
            },
          },
          "-=0.4",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        );
    });
  }, []);

  return (
    <section className="w-full px-[4vw] sm:px-[2vw] pt-[8vw] sm:pt-[4vw] pb-[10vw] sm:pb-[6vw] text-center">
      <h1
        ref={headingRef}
        className="font-[heading2] tracking-tight text-white text-[6.5vw] sm:text-[4.3vw] leading-[1.3] sm:leading-[1.1] w-full lg:w-[90%] text-center mx-auto"
      >
        We help Founders scale to{" "}
        <span className="inline-block bg-[#512477] text-white px-[1vw] sm:px-[0.8vw] rounded-[0.4vw]">
          ₹1–2 Crore/Year
        </span>{" "}
        by building <span className="text-[#9B6DFF]">a personal brand</span>{" "}
        that brings <span className="text-[#9B6DFF]">paying customers</span> to
        them.
      </h1>

      <p
        ref={paraRef}
        className="font-[heading2] tracking-wide text-[4vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.2vw] text-white mt-[6vw] sm:mt-[3vw] mb-[6vw] sm:mb-[3vw] md:w-[70%] mx-auto"
      >
        Winee Media have helped 62+ Founders build a Personal Brand that brings
        paying customers to them, without chasing, without ads, done for you.
      </p>

      <div
        ref={ctaRef}
        className="hidden md:flex justify-center mt-[2vw] opacity-0"
      >
        <CtaButton id="hero-cta" />
      </div>
    </section>
  );
};

export default Hero;
