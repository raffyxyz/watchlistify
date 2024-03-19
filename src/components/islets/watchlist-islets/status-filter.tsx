"use client";
import React from "react";
import { Filter, Check } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useWatchListStatus } from "@/states/useWatchListStatus";

const STATUS = ["Watching", "Completed", "Dropped", "On-Hold", "Plan to watch"];

const StatusFilter = () => {
  const [status, setStatus] = useWatchListStatus((state) => [
    state.status,
    state.setStatus,
  ]);

  return (
    <Menubar className="border-0 px-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="px-0 py-0">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Filter size={18} />
            <h1 className="text-md">{!!status ? status : "All"}</h1>
          </div>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem] bg-secondary" align="end">
          <MenubarItem onClick={() => setStatus("")}>
            <FilterLabel
              label="All"
              icon={status === "" && <Check size={17} />}
            />
          </MenubarItem>
          {STATUS.map((stat: string) => (
            <MenubarItem key={stat} onClick={() => setStatus(stat)}>
              <FilterLabel
                label={stat}
                icon={status === stat && <Check size={17} />}
              />
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

const FilterLabel: React.FC<{ label: string; icon?: React.ReactNode }> = ({
  label,
  icon,
}) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

export default StatusFilter;
