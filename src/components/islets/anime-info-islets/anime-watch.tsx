"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { WatchListType } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface AnimeWatchProps {
  listId: string;
}

const AnimeWatch: React.FC<AnimeWatchProps> = ({ listId }) => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["watchList", listId],
    queryFn: () => checkWatchList(listId),
  });

  const checkWatchList = async (listId: string): Promise<WatchListType> => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist/${listId}`
    );

    return data;
  };

  if (data) {
    return (
      <Button
        variant="orange"
        onClick={() =>
          router.push(`/anime/watch/${listId}?ep=${data.episodeId}`)
        }
      >
        <Play className="mr-2 h-4 w-4" strokeWidth="3px" />
        EP {data.episode}
      </Button>
    );
  }

  return (
    <Button
      variant="orange"
      onClick={() => router.push(`/anime/watch/${listId}`)}
    >
      <Play className="mr-2 h-4 w-4" strokeWidth="3px" />
      Watch Now
    </Button>
  );
};

export default AnimeWatch;
