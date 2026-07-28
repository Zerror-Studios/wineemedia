import React from "react";

const WistiaPlayer = ({ mediaId, aspect }) => {
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
        media-id={mediaId}
        aspect={aspect}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </>
  );
};

export default WistiaPlayer;
