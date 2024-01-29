import React from "react";
import Link from "next/link";
import UserMenu from "./user-menu";
import WatchListifyLogo from "./logo";

import { Search as SearchIcon, Library, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between content-center px-2 md:px-16 py-2 bg-slate-800">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-5 md:space-x-3">
          <Menu className="block md:hidden" />
          <WatchListifyLogo />
          <h1 className="text-xl font-semibold hidden md:block">
            WatchListify
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-md lg:text-lg" href="/">
            Anime
          </Link>
          <Link className="text-md lg:text-lg" href="/">
            K-drama
          </Link>
          <Link className="text-md lg:text-lg" href="/">
            Genre
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        <SearchIcon />
        <Library />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
