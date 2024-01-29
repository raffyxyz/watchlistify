import React from "react";
import Image from "next/image";

const WatchListifyLogo = () => {
  return (
    <>
      <div className="hidden md:block">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="WatchListify Logo"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src="/images/logo.png"
          width={25}
          height={25}
          alt="WatchListify Logo"
        />
      </div>
    </>
  );
};

export default WatchListifyLogo;
