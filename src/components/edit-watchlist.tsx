"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { Spinner } from "./ui/spinner";
import { useToast } from "./ui/use-toast";

import { Edit, Check } from "lucide-react";

interface UserMenuLabelProps {
  label: string | null | undefined;
  icon: React.ReactNode;
}

interface EditWatchListProps {
  listId: string;
  title: string;
  image: string;
  type: "anime" | "drama";
  selectedStatus: string;
}

const EditWatchlist: React.FC<EditWatchListProps> = ({
  listId,
  title,
  image,
  type,
  selectedStatus,
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: (listId: string) => {
      return axios.delete(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist/${listId}`
      );
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: { listId: string; status: string }) => {
      const { listId, status } = data;
      return axios.put(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}api/watchlist/${listId}`,
        { status }
      );
    },
  });

  if (removeMutation.isSuccess) {
    // toast({ description: `${title} removed from WatchList.` });
    console.log("Removed successfully.");
    queryClient.invalidateQueries({ queryKey: ["watchList"] });
    window.location.reload();
  }

  if (updateMutation.isSuccess) {
    // window.location.reload();
    // toast({ description: `${title} updated from WatchList.` });
    console.log("Update successfully.");
    queryClient.invalidateQueries({ queryKey: ["watchList"] });
  }

  return (
    <>
      <Menubar className="border-0 rounded-none">
        <MenubarMenu>
          <MenubarTrigger className="px-0 py-0">
            <Button type="submit" variant="secondary">
              {updateMutation.isPending || removeMutation.isPending ? (
                <Spinner className="mr-2" size={16} />
              ) : (
                <Edit className="mr-2 h-4 w-4" strokeWidth="3px" />
              )}
              Edit
            </Button>
          </MenubarTrigger>
          <MenubarContent className="min-w-[8rem] bg-secondary" align="start">
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Watching" })
              }
            >
              <UserMenuLabel
                label="Watching"
                icon={selectedStatus === "Watching" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Completed" })
              }
            >
              <UserMenuLabel
                label="Completed"
                icon={selectedStatus === "Completed" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Dropped" })
              }
            >
              <UserMenuLabel
                label="Dropped"
                icon={selectedStatus === "Dropped" && <Check size={17} />}
              />
            </MenubarItem>

            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "On Hold" })
              }
            >
              <UserMenuLabel
                label="On Hold"
                icon={selectedStatus === "On Hold" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem onClick={() => removeMutation.mutate(listId)}>
              <h1 className="text-red-400">Remove</h1>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

const UserMenuLabel: React.FC<UserMenuLabelProps> = ({ label, icon }) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

export default EditWatchlist;
