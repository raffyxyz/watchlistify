import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeSwitch from "./theme-switch";

import { UserRound, Library, Settings, LogOut } from "lucide-react";

interface UserMenuLabelProps {
  label: string;
  icon: React.ReactNode;
}

const UserMenuLabel: React.FC<UserMenuLabelProps> = ({ label, icon }) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

const UserMenu = () => {
  return (
    <Menubar className="border-0 rounded-none">
      <MenubarMenu>
        <MenubarTrigger className="px-0 py-0">
          <Avatar>
            <AvatarImage src="images/avatar.jpg" alt="Avatar user" />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="min-w-[8rem]" align="end">
          <MenubarItem>
            <ThemeSwitch />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <UserMenuLabel label="Profile" icon={<UserRound size={17} />} />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <UserMenuLabel label="Library" icon={<Library size={17} />} />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <UserMenuLabel label="Settings" icon={<Settings size={17} />} />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <UserMenuLabel label="Logout" icon={<LogOut size={17} />} />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
