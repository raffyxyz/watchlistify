import React from "react";
import AnimeServer from "./anime-server";
import AnimeQuality from "./anime-quality";

const AnimeActions: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="w-full 2xl:w-4/5 m-auto mt-3 mb-4">
      <div className="flex justify-center space-x-8">
        <AnimeServer id={id} />
        <AnimeQuality id={id} />
      </div>
    </div>
  );
};

export default AnimeActions;
