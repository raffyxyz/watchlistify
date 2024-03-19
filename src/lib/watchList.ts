import axios from "axios";
import { WatchListType } from "@/lib/types";

export const fetchUserWatchList = async (
  status?: string,
  type?: string | undefined
): Promise<WatchListType[]> => {
  const { data } = await axios.get(
    `${
      process.env.NEXT_PUBLIC_APP_URL
    }/api/watchlist?status=${status}&type=${type?.toLowerCase()}`
  );
  return data;
};

export const getUserWatchListInfo = async (
  listId: string
): Promise<WatchListType> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/watchlist/${listId}`
  );

  return data;
};
