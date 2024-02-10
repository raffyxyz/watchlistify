"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  recentAnime: RecentAnimeTypes[];
}

const RecentAnimeTrack: React.FC<RecentAnimeTrackProps> = ({ recentAnime }) => {
  // const responsive = {
  //   xl: {
  //     breakpoint: { max: 3000, min: 1536 },
  //     items: 6,
  //     slidesToSlide: 6, // optional, default to 1.
  //   },
  //   lg: {
  //     breakpoint: { max: 1536, min: 1280 },
  //     items: 4,
  //     slidesToSlide: 4, // optional, default to 1.
  //   },
  //   md: {
  //     breakpoint: { max: 1280, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 800, min: 640 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   xs: {
  //     breakpoint: { max: 640, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <>
      <div className="hidden md:block">
        <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
          {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
            <div key={anime.id} className="cursor-pointer">
              <img
                className="md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[270px] lg:h-[280px] xl:h-[330px] 2xl:h-[400px]"
                src={anime.image}
                alt={anime.title}
              />
              <h3 className="mt-2">{anime.title.substring(0, 27)}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        <ScrollArea className="mt-4 w-full whitespace-nowrap">
          <div className="flex w-max space-x-2">
            {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
              <div key={anime.id} className="cursor-pointer">
                <img
                  className="w-[190px] h-[270px]"
                  src={anime.image}
                  alt={anime.title}
                />
                <h3 className="mt-2 mb-2">{anime.title.substring(0, 20)}</h3>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>

    // <Carousel responsive={responsive} className="mt-4">
    //   {recentAnime.map((anime: RecentAnimeTypes) => (
    //     <div key={anime.id}>
    //       <img
    //         className="min-w-[280px] min-h-[400px]"
    //         src={anime.image}
    //         width={280}
    //         height={400}
    //         alt={anime.title}
    //       />
    //       <h3 className="mt-2">{anime.title}</h3>
    //     </div>
    //   ))}
    // </Carousel>
  );
};

export default RecentAnimeTrack;
