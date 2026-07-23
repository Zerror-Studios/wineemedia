import React from "react";

const SectionDivider = ({ className = "" }) => {
  return <div className={`w-full h-[1px] bg-white/20 my-[10vw] sm:my-[5vw] ${className}`} />;
};

export default SectionDivider;
