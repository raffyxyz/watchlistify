"use client";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RenderVideoDrama from "./drama-render-video";
import { fetchDramaStreamingLinks } from "@/lib/drama";
import NextBreadcrumb from "@/components/ui/next-breadcrumb";

interface DramaPlayerProps {
  episodeId: string;
  mediaId: string;
  cover: string;
  title: string;
}

const DramaPlayer: React.FC<DramaPlayerProps> = ({
  episodeId,
  mediaId,
  cover,
  title,
}) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const dramaEpisodeParams = searchParams.get("dEp") || "";

  const selectedDramaEpisode = dramaEpisodeParams || episodeId;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinksDrama", selectedDramaEpisode, mediaId],
    queryFn: () => fetchDramaStreamingLinks(selectedDramaEpisode, mediaId),
    refetchOnWindowFocus: false,
    enabled: !!selectedDramaEpisode && !!mediaId, // Only fetch data if selectedDramaEpisode and mediaId are provided
  });

  useEffect(() => {
    // Invalidate the query when the selected episode or mediaId changes
    queryClient.invalidateQueries({
      queryKey: ["streamingLinksDrama", selectedDramaEpisode, mediaId],
    });
  }, [queryClient, selectedDramaEpisode, mediaId]);

  return (
    <div className="relative backdrop-blur-xl bg-background">
      <img
        src={cover}
        alt="Background"
        className="absolute h-full w-full object-cover blur-lg opacity-20"
      />
      <div className="relative px-0 md:px-10 lg:px-16">
        <div className="w-full 2xl:w-3/4 m-auto py-3 rounded-sm mb-1">
          <div className="flex justify-between items-center">
            <NextBreadcrumb current={title}/>
            <h1>
              You are watching Episode{" "}
              {selectedDramaEpisode[selectedDramaEpisode.length - 1]}
            </h1>
          </div>
        </div>
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
