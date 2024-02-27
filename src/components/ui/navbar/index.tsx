"use client";
import React, { useState } from "react";
import Link from "next/link";
import UserMenu from "./user-menu";
import WatchListifyLogo from "./logo";
import Drawer from "./navbar-drawer";

import { Search as SearchIcon, Library, Menu } from "lucide-react";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex justify-between content-center px-2 md:px-16 py-2 bg-slate-800">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-5 md:space-x-3">
          <Menu
            className="block md:hidden cursor-pointer"
            onClick={handleToggleDrawer}
            id="drawer-button"
            aria-controls="drawer"
            aria-expanded="false"
          />

          <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

          {/* App logo */}
          <WatchListifyLogo />
          <Link href="/" className="text-xl font-semibold hidden md:block">
            WatchListify
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-md lg:text-lg" href="/recent">
            Recent Updates
          </Link>
          <Link className="text-md lg:text-lg" href="/top">
            Top Airing
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
