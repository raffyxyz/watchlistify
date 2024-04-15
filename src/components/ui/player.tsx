"use client";
import { FC, useRef } from "react";
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

interface PlayerProps {
  src: string;
}

const Player: FC<PlayerProps> = ({ src }) => {
  let playerRef = useRef<MediaPlayerInstance>(null);

  return (
    <MediaPlayer src={src} ref={playerRef} playsInline autoPlay>
      <MediaProvider />
      <PlyrLayout icons={plyrLayoutIcons} />
    </MediaPlayer>
  );
};

export default Player;
