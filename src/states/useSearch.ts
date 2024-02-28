import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { API_HOST_CLIENT, ANIME, GOGOANIME_ENDPOINT } from "@/config";
import { AnimeResultRequestTypes } from "@/lib/types";

type State = {
  searchQuery: string;
  animePage: number;
};

type Action = {
  setSearchQuery: (query: string) => void;
  searchAnime: (
    query: string,
    page?: number
  ) => Promise<AnimeResultRequestTypes>;
};

const initialState: State = {
  searchQuery: "",
  animePage: 1,
};

export const useSearch = createWithEqualityFn<State & Action>()((set, get) => ({
  ...initialState,
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  searchAnime: async (query: string) => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/${query}`
    );

    return data;
  },
  shallow,
}));
