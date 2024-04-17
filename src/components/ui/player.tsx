"use client";
import { FC, useRef } from "react";
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { None, customIcons } from "@/lib/player";

// Default styles
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

interface PlayerProps {
  src: string;
}

const Player: FC<PlayerProps> = ({ src }) => {
  let playerRef = useRef<MediaPlayerInstance>(null);

  return (
    <MediaPlayer src={src} ref={playerRef} playsInline autoPlay>
      <MediaProvider />
      <DefaultVideoLayout
        icons={{ ...defaultLayoutIcons, ...customIcons }}
        slots={{ googleCastButton: null }}
      />
    </MediaPlayer>
  );
};

export default Player;
