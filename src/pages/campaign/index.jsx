import React, { useState } from "react";
import Script from "next/script";
import SeoHeader from "@/components/seo/SeoHeader";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import QualifierBar from "@/components/campaign/QualifierBar";
import Hero from "@/components/campaign/Hero";
import VslSection from "@/components/campaign/VslSection";
import SocialProofSection from "@/components/campaign/SocialProofSection";
import ProblemSection from "@/components/campaign/ProblemSection";
import HowItWorksSection from "@/components/campaign/HowItWorksSection";
import FaqSection from "@/components/campaign/FaqSection";
import FinalCtaSection from "@/components/campaign/FinalCtaSection";
import SectionDivider from "@/components/campaign/SectionDivider";
import StickyCtaBar from "@/components/campaign/StickyCtaBar";
import VideoLightbox from "@/components/campaign/VideoLightbox";

const Campaign = ({ meta }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <>
      <SeoHeader meta={meta} />
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src="https://fast.wistia.com/embed/fthlw73m9l.js"
        strategy="lazyOnload"
        type="module"
      />
      <Script
        src="https://fast.wistia.com/embed/wqhrax2dg1.js"
        strategy="lazyOnload"
        type="module"
      />
      <Script
        src="https://fast.wistia.com/embed/tsa2afghr8.js"
        strategy="lazyOnload"
        type="module"
      />

      <div className=" campaign_paren relative bg-black text-white">
        <Navbar />
        <QualifierBar />

        <main className="relative z-10 w-full">
          <Hero />
          <VslSection />
          <SocialProofSection onWatchStory={setActiveVideoId} />
          <ProblemSection />
          <HowItWorksSection />
          <FaqSection />
          <FinalCtaSection />
        </main>

        <div className="pb-[16vw] sm:pb-[8vw] md:pb-[5vw]">
          <Footer />
        </div>

        <StickyCtaBar />
        <VideoLightbox
          activeVideoId={activeVideoId}
          onClose={() => setActiveVideoId(null)}
        />
      </div>
    </>
  );
};

export default Campaign;

export async function getStaticProps() {
  const meta = {
    title: "Personal Branding for Founders | WineeMedia Campaign",
    description:
      "We help founders scale to ₹1-2 Crore/Year by building a personal brand that brings paying customers — without chasing, without ads, done for you.",
    keywords:
      "personal branding, founders, paying customers, WineeMedia, founder strategy call, brand growth",
    author: "WineeMedia",
    robots: "index,follow",
  };
  return { props: { meta } };
}
