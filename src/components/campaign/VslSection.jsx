import React, { useEffect, useRef } from "react";
import WistiaPlayer from "./WistiaPlayer";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VslSection = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !videoWrapperRef.current) return;

    const anim = gsap.fromTo(
      videoWrapperRef.current,
      { width: "80%" },
      {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw] flex justify-center">
      <div
        ref={videoWrapperRef}
        className="aspect-video bg-[#ffffff0e] overflow-hidden w-[60%]"
      >
        <WistiaPlayer mediaId="fthlw73m9l" aspect="1.7777777777777777" />
      </div>
    </section>
  );
};

export default VslSection;

