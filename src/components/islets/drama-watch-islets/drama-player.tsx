"use client";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RenderVideoDrama from "./drama-render-video";
import { fetchDramaStreamingLinks } from "@/lib/drama";

interface DramaPlayerProps {
  episodeId: string;
  mediaId: string;
  cover: string;
}

const DramaPlayer: React.FC<DramaPlayerProps> = ({
  episodeId,
  mediaId,
  cover,
}) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const dramaEpisodeParams = searchParams.get("dEp") as string;

  const selectedDramaEpisode = !dramaEpisodeParams
    ? episodeId
    : dramaEpisodeParams;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinksDrama", selectedDramaEpisode, mediaId],
    queryFn: () => fetchDramaStreamingLinks(selectedDramaEpisode, mediaId),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["streamingLinksDrama", selectedDramaEpisode, mediaId],
    });
  }, [selectedDramaEpisode]);

  return (
    <div className="relative backdrop-blur-xl bg-background">
      <img
        src={cover}
        alt="Background"
        className="absolute h-full w-full object-cover blur-lg opacity-20"
      />

      <div className="relative px-0 md:px-10 lg:px-16">
        <RenderVideoDrama
          data={data}
          cover={cover}
          isFetching={isFetching}
          status={status}
          error={error}
        />
      </div>
    </div>
  );
};

export default DramaPlayer;
