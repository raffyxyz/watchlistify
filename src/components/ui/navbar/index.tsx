import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserMenu from "./user-menu";
import { Search } from "../search-input";

import { Search as SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between content-center px-2 md:px-4 py-2">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="WatchListify Logo"
        />
        <h1 className="text-xl font-semibold hidden md:block">WatchListify</h1>
      </div>
      <Search
        icon={<SearchIcon className="h-[16px] w-[16px]" />}
        type="text"
        placeholder="Search anime or kdrama"
        className="w-60 md:w-72 lg:w-96"
      />
      <div className="flex items-center space-x-0 md:space-x-4">
        <Link className="hidden md:block text-md lg:text-lg" href="/">
          Anime
        </Link>
        <Link className="hidden md:block text-md lg:text-lg" href="/">
          K-drama
        </Link>
        <Link className="hidden md:block text-md lg:text-lg" href="/">
          Library
        </Link>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
