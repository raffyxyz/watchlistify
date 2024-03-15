"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AddToWatchList from "@/components/add-to-watchlist";
import EditWatchlist from "@/components/edit-watchlist";

interface AddToWatchListProps {
  listId: string;
  title: string;
  image: string;
  type: "anime" | "drama";
}

const AnimeWatchList: React.FC<AddToWatchListProps> = ({
  listId,
  title,
  image,
  type,
}) => {
  const { data, status } = useQuery({
    queryKey: ["watchList", listId],
    queryFn: () => checkWatchList(listId),
  });

  const checkWatchList = async (listId: string): Promise<any> => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist/${listId}`
    );

    return data;
  };

  if (data && status === "success") {
    return (
      <EditWatchlist
        listId={listId}
        title={title}
        selectedStatus={data.status}
      />
    );
  }

  return (
    <AddToWatchList listId={listId} title={title} image={image} type="anime" />
  );
};

export default AnimeWatchList;
