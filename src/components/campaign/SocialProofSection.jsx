import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const stories = [
  {
    name: "Kapil Sharma",
    role: "Founder",
    company: "Kapil's Salon & Academy, Mumbai",
    badge: "India's fastest-growing salon chain",
    result:
      "Winee Media grew Kapil's Salon from 1,000 to 72,000 followers in 6 months. A real personal brand behind a 30-salon chain.",
    videoId: "wqhrax2dg1",
    cta: "Watch Kapil's story",
    image:
      "https://raw.githubusercontent.com/scale100million-prog/my-images/main/About-Kapils-Salon-1.jpg.jpeg",
  },
  {
    name: "Aruja Kothari",
    role: "Owner",
    company: "Studio Akto, Mumbai",
    badge: "Interior design studio",
    result:
      "Winee Media built Aruja's online brand from the ground up. That brand presence landed a client worth ₹10 lakh a month.",
    videoId: "tsa2afghr8",
    cta: "Watch Aruja's story",
    image:
      "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Aruja%20Kothari.jpeg",
  },
];

const SocialProofSection = ({ onWatchStory }) => {
  const sectionRef = useRef(null);
  const paraRef = useRef(null);
  const headingRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (!paraRef.current || !headingRef.current) return;

    let anim;
    const parallaxTriggers = [];

    document.fonts.ready.then(() => {
      const paraSplit = SplitText.create(paraRef.current, {
        type: "chars, words, lines",
        linesClass: "line-mask",
      });

      const headingSplit = SplitText.create(headingRef.current, {
        type: "chars, words, lines",
        linesClass: "line-mask",
      });

      anim = gsap.timeline({
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      anim
        .from(paraSplit.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.2,
          },
        })
        .from(
          headingSplit.lines,
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.8,
            stagger: {
              amount: 0.2,
            },
          },
          "-=0.4"
        );

      imageRefs.current.forEach((img) => {
        if (!img) return;
        const frame = img.parentElement;

        const tween = gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        parallaxTriggers.push(tween);
      });
    });

    return () => {
      if (anim) {
        anim.scrollTrigger?.kill();
        anim.kill();
      }
      parallaxTriggers.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  return (
   <section
  ref={sectionRef}
  className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw] text-center"
>
  <SectionHeader title="Results" />

 <p
  ref={paraRef}
  className="font-[heading2] tracking-wide text-[4vw] md:text-[2vw] mb-[5vw] sm:mb-[3vw] md:w-[70%] mx-auto"
>
  Since 2021. India&apos;s Only{" "}
  <span className="text-[#9B6DFF]">
    Done-For-You Personal Branding System
  </span>{" "}
  For{" "}
  <span className="text-[#9B6DFF]">
    Founders
  </span>
  .{" "}

  <span className="inline-block bg-[#512477] text-white px-[1vw] py-[0.2vw] rounded-[0.4vw] shadow-[0_8px_30px_rgba(81,36,119,0.35)]">
    62+ Founders
  </span>{" "}

  across{" "}
  <span className="text-[#9B6DFF]">
    10 countries
  </span>
  . From invisible online to{" "}
  <span className="text-[#9B6DFF]">
    paying customers
  </span>{" "}
  coming in.
</p>

<h3
  ref={headingRef}
  className="font-[heading2] tracking-wide text-white text-[5.5vw] sm:text-[3.5vw] md:text-[2.5vw] leading-[1.15] mb-[8vw] sm:mb-[4vw] md:w-[75%] mx-auto"
>
  Founders Who Had No{" "}
  <span className="text-[#9B6DFF]">
    Personal Brand
  </span>{" "}
  Online. Here Is{" "}
  <span className="inline-block bg-[#512477] text-white px-[1vw] py-[0.2vw] rounded-[0.4vw] shadow-[0_8px_30px_rgba(81,36,119,0.35)]">
    What Changed
  </span>
  .
</h3>

  <div className="social-proof-images-container flex flex-col sm:flex-row gap-[8vw] sm:gap-[3vw]">
    {stories.map((story, i) => (
      <div
        key={story.videoId}
        className="w-full sm:w-1/2 flex flex-col items-center text-center"
      >
        <div className="w-full aspect-[4/5] sm:aspect-square bg-[#ffffff0e] overflow-hidden mb-[5vw] sm:mb-[2vw]">
          <img
            ref={(el) => (imageRefs.current[i] = el)}
            src={story.image}
            alt={story.name}
            referrerPolicy="no-referrer"
            className="social-proof-img w-full h-[120%] object-cover will-change-transform"
          />
        </div>

        <p className="font-[heading] tracking-wide text-[3.5vw] sm:text-[1.5vw] md:text-[1.1vw] text-white/50 mb-[2vw] sm:mb-[1vw]">
          {story.badge}
        </p>

        <h4 className="font-[heading2] text-[6vw] sm:text-[2.5vw] md:text-[2vw] text-white leading-none mb-[1vw]">
          {story.name}{" "}
          <span className="text-white/50 text-[3.5vw] sm:text-[1.4vw] md:text-[1.1vw] font-[heading2]">
            / {story.role}
          </span>
        </h4>

        <p className="font-[heading2] tracking-wide text-[3.5vw] sm:text-[1.5vw] md:text-[1.15vw] text-white mb-[3vw] sm:mb-[1.5vw]">
          {story.company}
        </p>

        <p className="font-[heading2] tracking-wide text-[3.8vw] sm:text-[1.4vw] md:text-[1.1vw] text-white mb-[5vw] sm:mb-[2vw] w-[80%] sm:w-[65%] mx-auto flex-grow">
          {story.result}
        </p>

        <button
          onClick={() => onWatchStory(story.videoId)}
          className="mt-auto w-fit viewall overflow-hidden effecttxt border border-white px-[5vw] sm:px-[2.5vw] md:px-[1.8vw] relative rounded-full py-[2vw] sm:py-[.9vw] md:py-[.6vw] text-white inline-flex items-center gap-[1vw] cursor-pointer"
        >
          <div className="relative z-[10] overflow-hidden h-[4vw] sm:h-[2vw] md:h-[1.3vw] text-[3vw] sm:text-[1.6vw] md:text-[1vw] font-[heading]">
            <h2 className="one capitalize whitespace-nowrap h-[4vw] sm:h-[2vw] md:h-[1.3vw] leading-[4vw] sm:leading-[2vw] md:leading-[1.3vw]">
              {story.cta}
            </h2>
            <h2 className="one capitalize whitespace-nowrap h-[4vw] sm:h-[2vw] md:h-[1.3vw] leading-[4vw] sm:leading-[2vw] md:leading-[1.3vw]">
              {story.cta}
            </h2>
          </div>
          <i className="ri-play-fill relative z-[10] text-[3.5vw] sm:text-[1.6vw] md:text-[1vw]" />
          <div className="coverall transition-all duration-300 w-full h-full bg-white absolute left-1/2 -translate-x-1/2 top-full rounded-full" />
        </button>
      </div>
    ))}
  </div>
</section>
  );
};

export default SocialProofSection;
