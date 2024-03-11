"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AnimeQuality: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [episode, quality, setQuality] = useAnimeEpisode((state) => [
    state.episode,
    state.quality,
    state.setQuality,
  ]);

  const {
    status,
    data: animeQuality,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["animequality", id],
    queryFn: () => fetchAnimeStreamingLinks(),
  });

  const fetchAnimeStreamingLinks = async () => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/watch/${id}`
    );

    return data.sources;
  };

  const handleQualityClick = (quality: string | undefined) => {
    router.push(`?ep=${id}&q=${quality}`, { scroll: false });
    setQuality(quality);
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="quality">Quality: </Label>
      <Select onValueChange={handleQualityClick} value={quality}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {animeQuality?.map((sources: any) => (
              <SelectItem key={sources.url} value={sources.quality}>
                {sources.quality}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AnimeQuality;
