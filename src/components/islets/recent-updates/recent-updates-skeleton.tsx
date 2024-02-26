import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const dummyData = Array.from({ length: 12 }, (_, index) => index + 1);

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[240px] xl:h-[330px] 2xl:h-[400px] rounded-none" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px] md:w-[250px] rounded-none" />
      </div>
    </div>
  );
};

const RecentUpdatesSkeleton = () => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
      {dummyData.map((index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default RecentUpdatesSkeleton;
