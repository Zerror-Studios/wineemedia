import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionHeaderLight = ({
  title,
  className = "",
  fullWidthLine = false,
  contentClassName = "w-full",
}) => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    let anim;
    document.fonts.ready.then(() => {
      const split = SplitText.create(headingRef.current, {
        type: "chars, words, lines",
        linesClass: "line-mask",
      });

      anim = gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 0.2,
        },
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      if (anim) {
        anim.scrollTrigger?.kill();
        anim.kill();
      }
    };
  }, [title]);

  return (
    <div
      className={`relative w-full py-[5vw] sm:py-[1.2vw] mb-[6vw] sm:mb-[3vw] ${className}`}
    >
      {fullWidthLine ? (
        <>
          <div className="w-full flex justify-center">
            <div className={contentClassName}>
              <h2
                ref={headingRef}
                className="text-[10vw] sm:text-[3.5vw] font-[heading2] leading-none text-black"
              >
                {title}
              </h2>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black/50 mt-[3vw] sm:mt-[1.2vw]" />
        </>
      ) : (
        <>
          <h2
            ref={headingRef}
            className="text-[10vw] sm:text-[3.5vw] font-[heading2] leading-none text-black"
          >
            {title}
          </h2>
          <div className="w-full h-[1px] bg-black/20 mt-[3vw] sm:mt-[1.2vw]" />
        </>
      )}
    </div>
  );
};

export default SectionHeaderLight;

