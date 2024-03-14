import React from "react";
import { Metadata } from "next";
import axios from "axios";
import {
  DramaInfoWrapper,
  DramaInfo,
  DramaInfoPlus,
} from "@/components/islets/drama-info-islets";
import { API_HOST, MOVIE, DRAMA_COOL } from "@/config";
import { DramaDetailsType } from "@/lib/types";

const getData = async (
  id: string
): Promise<{ dramaInfo: DramaDetailsType }> => {
  const { data } = await axios.get(`${API_HOST + MOVIE + DRAMA_COOL}/info`, {
    params: { id: encodeURIComponent(id) },
  });

  return { dramaInfo: data };
};

export default async function DramaPage({
  params,
}: {
  params: { id: string };
}) {
  const { dramaInfo } = await getData(params.id);
  return (
    <DramaInfoWrapper background={dramaInfo.image}>
      <DramaInfo dramaInfo={dramaInfo} dramaId={params.id} />
      <DramaInfoPlus dramaInfo={dramaInfo} />
    </DramaInfoWrapper>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { dramaInfo } = await getData(params.id);
  return {
    title: dramaInfo.title,
    openGraph: {
      title: dramaInfo.title,
      type: "video.tv_show",
      url: `watchlistify-re-git-dev-raffyamoguis.vercel.app/drama/${dramaInfo.id}`,
      images: dramaInfo.image,
      description: `Watch ${dramaInfo.title} for free at WatchListify.`,
    },
  };
}
