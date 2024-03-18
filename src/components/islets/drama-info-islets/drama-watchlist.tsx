import React from 'react'
import { useQuery } from "@tanstack/react-query";
import AddToWatchList from "@/components/add-to-watchlist";
import EditWatchlist from "@/components/edit-watchlist";
import { getUserWatchListInfo } from "@/lib/watchList";

interface AddToWatchListProps {
    listId: string;
    title: string;
    image: string;
    episode: number;
    episodeId: string;
    iconOnly?: boolean;
  }

const DramaWatchList:React.FC<AddToWatchListProps><AddToWatchListProps> = ({
    listId,
    title,
    image,
    episode,
    episodeId,
    iconOnly,
  }) => {
  return (
    <div>DramaWatchList</div>
  );
}

export default DramaWatchList;