import { useEffect } from "react";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import { useAnimeEpisodeChange } from "@/states/useAnimeEpisodeChange";

function useResetPlayerState() {
  const setCurrentIndex = useAnimeEpisodeChange(
    (state) => state.setCurrentIndex
  );
  const [setQuality] = useAnimeEpisode((state) => [state.setQuality]);

  const reset = () => {
    setCurrentIndex(1);
    setQuality("default");
  };

  useEffect(() => {
    reset();
  }, []);

  return reset;
}

export default useResetPlayerState;
