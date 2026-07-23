import React from "react";

const WistiaPlayer = ({ mediaId, aspect }) => {
  return (
    <wistia-player
      media-id={mediaId}
      aspect={aspect}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default WistiaPlayer;
