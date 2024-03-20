"use client";
import React from "react";
import Link from "next/link";
import DramaWatchList from "../drama-info-islets/drama-watchlist";

interface AnimeDetailsProps {
  id: string;
  title: string;
  status: string;
  description: string | null;
  image: string;
  episode: number;
  episodeId: string;
}

const DramaDetails: React.FC<AnimeDetailsProps> = ({
  id,
  title,
  status,
  description,
  image,
  episode,
  episodeId,
}) => {
  return (
    <div className="mt-10 lg:mt-0 lg:col-span-2">
      <Link
        href={`/drama/${encodeURIComponent(id)}`}
        className="text-lg text-orange-400"
      >
        {title}
      </Link>
      <p className="mb-3">{status}</p>
      <DramaWatchList
        listId={encodeURIComponent(id)}
        title={title}
        image={image}
        episode={episode}
        episodeId={episodeId}
      />
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default DramaDetails;
