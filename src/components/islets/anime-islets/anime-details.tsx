import { AnimeInfo } from "@/lib/types";
import React from "react";

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
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default AnimeDetails;
