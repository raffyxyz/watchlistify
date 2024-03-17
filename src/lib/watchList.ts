import axios from "axios";
import { WatchListType } from "@/lib/types";

export const fetchUserWatchList = async (): Promise<WatchListType[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist`
  );
  return data;
};

export const getUserWatchListInfo = async (
  listId: string
): Promise<WatchListType> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist/${listId}`
  );

  return data;
};
