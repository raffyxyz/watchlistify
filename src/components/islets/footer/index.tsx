import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/utils";

type LinkType = {
  name: string;
  url: string;
};

export default function Footer() {
  return (
    <div className="mt-28">
      <Separator className="my-4" />

      <div className="mt-4 mb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="text-slate-500 text-sm">
            WatchListify does not store any files on our server, we only linked
            to the media which is hosted on 3rd party services.
          </p>
          <p className="text-slate-500 text-sm">
            © WatchListify.site. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-2 mt-4 lg:mt-0">
          {SOCIAL_LINKS.map((link: LinkType) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-sm text-slate-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
