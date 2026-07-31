import React, { useEffect, useRef } from "react";

const ensureCaptionsOff = (mediaId) => {
  if (typeof window === "undefined" || !mediaId) return;

  window.wistiaOptions = {
    ...(window.wistiaOptions || {}),
    _all: {
      ...((window.wistiaOptions && window.wistiaOptions._all) || {}),
      plugin: {
        ...((window.wistiaOptions &&
          window.wistiaOptions._all &&
          window.wistiaOptions._all.plugin) ||
          {}),
        captions: {
          onByDefault: false,
        },
      },
    },
    [mediaId]: {
      ...((window.wistiaOptions && window.wistiaOptions[mediaId]) || {}),
      plugin: {
        ...((window.wistiaOptions &&
          window.wistiaOptions[mediaId] &&
          window.wistiaOptions[mediaId].plugin) ||
          {}),
        captions: {
          onByDefault: false,
        },
      },
    },
  };
};

const WistiaPlayer = ({ mediaId, aspect }) => {
  const playerRef = useRef(null);

  ensureCaptionsOff(mediaId);

  useEffect(() => {
    ensureCaptionsOff(mediaId);
    const player = playerRef.current;
    if (!player) return;

    const turnOffCaptions = () => {
      try {
        if (typeof player.disableCaptions === "function") {
          player.disableCaptions();
        } else if ("captionsEnabled" in player) {
          player.captionsEnabled = false;
        }
      } catch (_) {
        /* ignore */
      }
    };

    turnOffCaptions();
    player.addEventListener("loaded", turnOffCaptions);
    player.addEventListener("play", turnOffCaptions);

    return () => {
      player.removeEventListener("loaded", turnOffCaptions);
      player.removeEventListener("play", turnOffCaptions);
    };
  }, [mediaId]);

  return (
    <>
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player
        ref={playerRef}
        media-id={mediaId}
        aspect={aspect}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </>
  );
};

export default WistiaPlayer;
