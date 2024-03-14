import React from "react";
import axios from "axios";
import { API_HOST, MOVIE, DRAMA_COOL } from "@/config";
import { DramaDetailsType } from "@/lib/types";
import {
  DramaWatchWrapper,
  DramaPlayer,
  DramaDetails,
  DramaEpisodes,
} from "@/components/islets/drama-watch-islets";

const getData = async (
  id: string
): Promise<{ dramaInfo: DramaDetailsType }> => {
  const { data } = await axios.get(`${API_HOST + MOVIE + DRAMA_COOL}/info`, {
    params: { id },
  });

  return { dramaInfo: data };
};

export default async function DramaWatchPage({
  params,
}: {
  params: { id: string };
}) {
  const { dramaInfo } = await getData(params.id);
  return (
    <>
      {dramaInfo?.episodes && dramaInfo.episodes.length > 0 && (
        <DramaPlayer
          episodeId={dramaInfo.episodes[0].id}
          mediaId={params.id}
          cover={dramaInfo.image}
        />
      )}
      <DramaWatchWrapper>
        <DramaDetails
          id={dramaInfo.id}
          description={dramaInfo.description}
          status={dramaInfo.status}
          title={dramaInfo.title}
        />
        <DramaEpisodes dramaEpisodes={dramaInfo.episodes} />
      </DramaWatchWrapper>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { dramaInfo } = await getData(params.id);
  return {
    title: `Watch ${dramaInfo.title}`,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
      title: `Watch ${dramaInfo.title} Drama Online free on WatchListify.site`,
      type: "video.episode",
      url: `/drama/${dramaInfo.id}`,
      images: dramaInfo.image,
      description: `The best website to watch ${dramaInfo.title} drama for free at WatchListify.site.`,
    },
  };
}
