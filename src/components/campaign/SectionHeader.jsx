import React from "react";

const SectionHeader = ({
  title,
  className = "",
  fullWidthLine = false,
  contentClassName = "w-full",
}) => {
  return (
    <div
      className={`relative w-full py-[5vw] sm:py-[1.2vw] mb-[6vw] sm:mb-[3vw] ${className}`}
    >
      {fullWidthLine ? (
        <>
          <div className="w-full flex justify-center">
            <div className={contentClassName}>
              <h2 className="text-[10vw] sm:text-[3.5vw] font-[heading2] leading-none text-white">
                {title}
              </h2>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/20 mt-[3vw] sm:mt-[1.2vw]" />
        </>
      ) : (
        <>
          <h2 className="text-[10vw] sm:text-[3.5vw] font-[heading2] leading-none text-white">
            {title}
          </h2>
          <div className="w-full h-[1px] bg-white/20 mt-[3vw] sm:mt-[1.2vw]" />
        </>
      )}
    </div>
  );
};

export default SectionHeader;
