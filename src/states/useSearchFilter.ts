import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  filter: string;
};

type Action = {
  setFilter: (filter: string) => void;
  isActiveAll: () => boolean;
  isActiveAnime: () => boolean;
  isActiveDrama: () => boolean;
};

const initialState: State = {
  filter: "all",
};

export const useSearchFilter = createWithEqualityFn<State & Action>()(
  (set, get) => ({
    ...initialState,
    setFilter: (filter: string) => set({ filter }),
    isActiveAll: () => {
      return get().filter === "all";
    },
    isActiveAnime: () => {
      return get().filter === "anime";
    },
    isActiveDrama: () => {
      return get().filter === "drama";
    },
    shallow,
  })
);
