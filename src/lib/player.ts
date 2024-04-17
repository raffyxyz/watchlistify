import type { DefaultLayoutIcons } from "@vidstack/react/player/layouts/default";
import {
  IconExternalLink,
  IconExternalLinkOff,
  IconVolume,
  IconMaximize,
  IconSettings,
  IconArrowsMinimize,
  IconBadgeHd,
  IconBrandSpeedtest,
  IconChevronLeft,
  IconChevronRight,
  IconVolume3,
  IconVolume2,
  IconPlayerPlay,
  IconPlayerPause,
  IconRotate,
} from "@tabler/icons-react";

export const None = () => null;

export const customIcons: Partial<DefaultLayoutIcons> = {
  PIPButton: {
    Enter: IconExternalLink,
    Exit: IconExternalLinkOff,
  },
  FullscreenButton: {
    Enter: IconMaximize,
    Exit: IconArrowsMinimize,
  },
  PlayButton: {
    Play: IconPlayerPlay,
    Pause: IconPlayerPause,
    Replay: IconRotate,
  },
  MuteButton: {
    Mute: IconVolume3,
    VolumeLow: IconVolume2,
    VolumeHigh: IconVolume,
  },
  Menu: {
    ArrowLeft: IconChevronLeft,
    ArrowRight: IconChevronRight,
    Audio: None,
    Chapters: None,
    Captions: None,
    Settings: IconSettings,
    Quality: IconBadgeHd,
    Speed: IconBrandSpeedtest,
    Font: None,
  },
};
