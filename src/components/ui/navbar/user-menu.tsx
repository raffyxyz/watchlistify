import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserMenu = () => {
  return (
    <Menubar className="border-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="images/avatar.jpg" alt="Avatar user" />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem]">
          <MenubarItem>
            <h1>Profile</h1>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Library</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Settings</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
