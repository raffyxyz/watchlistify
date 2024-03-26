import axios from "axios";
import { AnimeVideoDetailsType, AnimeInfo } from "@/lib/types";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

export const fetchAnimeStreamingLinks = async (
  episode: string
): Promise<AnimeVideoDetailsType> => {
  const { data } = await axios.get(
    `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/watch/${encodeURIComponent(
      episode
    )}`
  );

  return data;
};

export const fetchAnimeInfo = async (id: string): Promise<AnimeInfo> => {
  const { data } = await axios.get(
    `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/info/${encodeURIComponent(
      id
    )}`
  );

  return data;
};
