import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between content-center px-4 py-2">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="WatchListify Logo"
        />
        <h1 className="text-xl font-semibold">WatchListify</h1>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/">Anime</Link>
        <Link href="/">K-drama</Link>
        <Link href="/">Library</Link>
        <Avatar>
          <AvatarImage src="images/avatar.jpg" alt="Avatar user" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
