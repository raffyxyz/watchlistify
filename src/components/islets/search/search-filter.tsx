"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchFilter } from "@/states/useSearchFilter";

const SearchFilter = () => {
  const [setFilter, isActiveAnime, isActiveDrama] = useSearchFilter((state) => [
    state.setFilter,
    state.isActiveAnime,
    state.isActiveDrama,
  ]);
  return (
    <div className="flex justify-center mt-6 space-x-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="anime"
          checked={isActiveAnime()}
          onCheckedChange={() => setFilter("anime")}
        />
        <label
          htmlFor="anime"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Anime
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="drama"
          checked={isActiveDrama()}
          onCheckedChange={() => setFilter("drama")}
        />
        <label
          htmlFor="drama"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Drama
        </label>
      </div>
    </div>
  );
};

export default SearchFilter;
