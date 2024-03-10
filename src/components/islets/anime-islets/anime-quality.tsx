"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/watch/${id}`,
      { params: { server: "yawa" } }
    );

    return data;
  };
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="quality">Quality: </Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {animeQuality?.sources?.map((sources: any) => (
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
