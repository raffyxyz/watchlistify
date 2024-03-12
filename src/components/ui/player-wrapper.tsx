"use client";
import React, { useRef } from "react";
import VPlayer from "vnetwork-player";
import Hls from "hls.js";
import "vnetwork-player/dist/vnetwork-player.min.css";

interface Props {
  data: any;
  image: string;
}

const PlayerWrapper: React.FC<Props> = ({ data, image }) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  return (
    <VPlayer
      Hls={Hls}
      source={data?.sources?.map((item: any) => ({
        label: item?.quality,
        url: item?.url,
      }))}
      color="#db8b3c"
      poster={image}
      playerRef={playerRef}
      autoPlay
    />
  );
};

export default PlayerWrapper;
