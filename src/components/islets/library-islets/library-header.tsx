import React from "react";
import { Filter, Library } from "lucide-react";

const LibraryHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="flex items-center space-x-4">
        <Library className="text-orange-400" size={32} strokeWidth={3} />
        <h1 className="text-3xl text-orange-400 font-semibold">Library</h1>
      </div>

      <div className="flex items-center space-x-3 cursor-pointer">
        <Filter size={20} />
        <h1>Filter</h1>
      </div>
    </div>
  );
};

export default LibraryHeader;
