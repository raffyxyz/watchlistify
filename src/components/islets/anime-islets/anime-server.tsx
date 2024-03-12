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
import { Skeleton } from "@/components/ui/skeleton";

const AnimeServer: React.FC<{ id: string }> = ({ id }) => {
  const {
    status,
    data: servers,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["animeServer", id],
    queryFn: () => fetchAnimeStreamingServers(),
  });

  const fetchAnimeStreamingServers = async () => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/servers/${id}`
    );

    return data;
  };

  if (isFetching) {
    return <Skeleton className="h-10 w-[140px] md:w-[230px]" />;
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="server">Server: </Label>
      <Select>
        <SelectTrigger className="w-[100px] md:w-[180px]">
          <SelectValue placeholder="Select a server" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {servers?.map((server: any) => (
              <SelectItem key={server.url} value={server.name}>
                {server.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AnimeServer;