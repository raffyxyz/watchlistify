"use client";
import { FC } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
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
  return (
    <MediaPlayer src={src} autoPlay hideControlsOnMouseLeave>
      <MediaProvider />
      <PlyrLayout icons={plyrLayoutIcons} />
    </MediaPlayer>
  );
};

export default Player;
