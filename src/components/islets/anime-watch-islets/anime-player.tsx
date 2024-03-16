"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PlayerWrapper from "@/components/ui/player-wrapper";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";
import { Spinner } from "@/components/ui/spinner";
import { AnimeVideoDetailsType } from "@/lib/types";

interface AnimePlayerProps {
  episodeId: string;
  cover: string;
}

interface RenderVideoProps {
  data: any;
  cover: string;
  isFetching: boolean;
  status: string;
  error: any;
}

const AnimePlayer: React.FC<AnimePlayerProps> = ({ episodeId, cover }) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;

  const selectedEpisode = !episodeParams ? episodeId : episodeParams;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinks", selectedEpisode],
    queryFn: () => fetchAnimeStreamingLinks(selectedEpisode),
    refetchOnWindowFocus: false,
  });

  const fetchAnimeStreamingLinks = async (
    episode: string
  ): Promise<AnimeVideoDetailsType> => {
    const { data } = await axios.get(
      `${
        API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT
      }/watch/${encodeURIComponent(episode)}`
    );

    return data;
  };

  useEffect(() => {
    if (selectedEpisode) {
      queryClient.invalidateQueries({
        queryKey: ["streamingLinks", selectedEpisode],
      });
    }
  }, [selectedEpisode]);

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
        <PlayerWrapper
          data={data?.sources?.map((item: any) => ({
            label: item?.quality,
            url: item?.url,
          }))}
          image={cover}
        />
      </div>
    );
  }

  return null;
}

export default AnimePlayer;
