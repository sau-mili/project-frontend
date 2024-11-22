// import React from "react";
import { HandCoinsIcon, Handshake, Home, Search, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import ProfileDropdown from "./ProfileDropdown";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Create Offer",
    url: "/create-offer",
    icon: HandCoinsIcon,
  },
  {
    title: "Negotiations",
    url: "/negotiations",
    icon: Handshake,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return [
    "w-full flex items-center gap-3 p-2 rounded-md transition-colors",
    isActive ? "bg-med1 text-white" : "text-gray-200 hover:bg-light4 hover:text-dark1"
  ].join(" ");
};

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <div className="flex items-center justify-center h-16 bg-dark1 text-white"></div>
      <SidebarContent className="relative bg-[#071403]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[]">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="!p-0">
                  <NavLink
                    to={item.url}
                    end={item.url === "/"}
                    className={getLinkClassName}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#071403]">
        <SidebarMenu>
          <SidebarMenuItem >
            <div className="bg-gray-300 h-[1px] w-full my-2"></div>
            <ProfileDropdown/>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
