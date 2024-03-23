"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import Player from "@/components/ui/player";
import { API_HOST_CLIENT, DRAMA_COOL, MOVIE } from "@/config";

interface DramaPlayerProps {
  episodeId: string;
  mediaId: string;
  cover: string;
}

interface RenderVideoProps {
  data: any;
  cover: string;
  isFetching: boolean;
  status: string;
  error: any;
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
    queryFn: () => fetchAnimeStreamingLinks(selectedDramaEpisode, mediaId),
    refetchOnWindowFocus: false,
  });

  const fetchAnimeStreamingLinks = async (
    episode: string,
    mediaId: string
  ): Promise<any> => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + MOVIE + DRAMA_COOL}/watch`,
      { params: { episodeId: episode, mediaId: mediaId } }
    );

    return data;
  };

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
        <RenderVideo
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

function RenderVideo({
  data,
  cover,
  isFetching,
  error,
  status,
}: RenderVideoProps) {
  if (status === "error") {
    console.log(error);
    return (
      <div className="flex justify-center items-center h-[250px] sm:h-[330px] md:h-[450px] lg:h-[570px] xl:h-[660px]">
        <div className="flex flex-col items-center space-y-2">
          <img src="/images/error.png" alt="Error" className="w-24 h-24" />
          <h1>There&apos;s an error playing video.</h1>
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[260px] sm:h-[340px] md:h-[460px] lg:h-[580px] xl:h-[670px]">
        <Spinner className="text-orange-400" size={40} />
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full 2xl:w-3/4 m-auto mt-0">
        <Player src={data?.sources[0].url} />
      </div>
    );
  }

  return null;
}

export default DramaPlayer;
