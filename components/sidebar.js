import Image from "next/image"
import logo from "../public/img/logo.png"
import SidebarButton from "./SidebarButton"
import { HomeIcon } from "@heroicons/react/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  console.log("sidebar")
  return (
    <div className="hidden sm:flex flex-col p-1 xl:items-start fixed h-full">
        {/* Twitter Logo */}
        <div className="onHover">
            <Image width={50} height={50} src={logo} alt="logo" />
        </div>
        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarButton text="Home" Icon={HomeIcon} active />
          <SidebarButton text="Explore" Icon={HashtagIcon} />
          <SidebarButton text="Notifications" Icon={BellIcon} />
          <SidebarButton text="Messages" Icon={InboxIcon} />
          <SidebarButton text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarButton text="Lists" Icon={ClipboardIcon} />
          <SidebarButton text="Profile" Icon={UserIcon} />
          <SidebarButton text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        
        {/* tweet button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* profile */}

        <div className="onHover text-gray-700 flex items-center  xl:justify-start mt-auto">
          <Image width="50" height="50" src={logo} alt="user-photo" className="h-10 w-10 rounded-full xl:mr-2"/>
          <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">Rohit</h4>
            <p className="text-gray-500">@rohit</p>
          </div>
          <DotsHorizontalIcon className = "h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}