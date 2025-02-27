import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import avatr from "../../assets/image/74.jpg"
export default function Navbar() {
  return (
   <div className="flex justify-between w-full h-15 ">
        <div className="content-center">
            <span className="m-5 text-3xl"> Dashbord admin </span>
        </div>
        <div className="cursor-pointer text-gray-500  mr-5 flex items-center">
            <span className="relative m-1">
                <NotificationsIcon />
                <span className="w-[15px] h-[15px] absolute -start-1 top-0 text-white text-[10px] bg-red-600 color-white flex justify-center items-center rounded-[100%] ">2</span>
            </span>
            <span className="relative m-1">
                <LanguageIcon />
                <span className="w-[15px] h-[15px] absolute -start-1 top-0 text-white text-[10px]  bg-red-600 color-white flex justify-center items-center rounded-[100%] ">2</span>
            </span>
            <span class=" m-1">
                <SettingsIcon />
            </span>
            <span className=" m-1">
                <img src={avatr} alt="" className="w-10 rounded-[100%]"/>
            </span>
        </div>
    </div>
  )
}
