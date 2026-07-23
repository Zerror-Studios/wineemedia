import React from "react";
import WistiaPlayer from "./WistiaPlayer";

const VideoLightbox = ({ activeVideoId, onClose }) => {
  if (!activeVideoId) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-[4vw] sm:p-[2vw]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[350px] aspect-[9/16] bg-black border border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[3vw] right-[3vw] sm:top-[1vw] sm:right-[1vw] z-[110] cursor-pointer text-white border border-white rounded-full w-[10vw] h-[10vw] sm:w-[3vw] sm:h-[3vw] flex items-center justify-center"
          aria-label="Close video"
        >
          <i className="ri-close-line text-[5vw] sm:text-[1.5vw]" />
        </button>

        <div className="w-full h-full bg-black relative flex items-center justify-center">
          <WistiaPlayer mediaId={activeVideoId} aspect="0.5625" />
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
