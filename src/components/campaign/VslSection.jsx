import React from "react";
import WistiaPlayer from "./WistiaPlayer";

const VslSection = () => {
  return (
    <section className="w-full px-[4vw] sm:px-[2vw] py-[6vw] sm:py-[3vw]">
      <div className="w-full aspect-video bg-[#ffffff0e] overflow-hidden">
        <WistiaPlayer mediaId="zgy68e6hrb" aspect="1.7777777777777777" />
      </div>
    </section>
  );
};

export default VslSection;
