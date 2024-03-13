import React from "react";
import axios from "axios";
import { API_HOST, MOVIE, DRAMA_COOL } from "@/config";
import { DramaDetailsType } from "@/lib/types";
import {
  DramaWatchWrapper,
  DramaPlayer,
  DramaDetails,
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
      </DramaWatchWrapper>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { dramaInfo } = await getData(params.id);
  return {
    title: `Watch ${dramaInfo.title}`,
  };
}
