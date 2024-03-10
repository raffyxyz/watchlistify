import { AnimeInfo } from "@/lib/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

interface AnimeDetailsProps {
  title: string;
  subOrDub: string;
  status: string;
  description: string | null;
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({
  title,
  subOrDub,
  status,
  description,
}) => {
  return (
    <div className="col-span-2">
      <h1 className="text-lg text-orange-400">{title}</h1>
      <p className="text-muted-foreground text-md">{subOrDub}</p>
      <p>{status}</p>
      <Button
        className="mt-3 border-2 rounded-none font-semibold uppercase"
        variant="outline_orange"
      >
        <Bookmark className="mr-2 h-4 w-4" strokeWidth="3px" />
        Add To Library
      </Button>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default AnimeDetails;
