// import React from 'react'
import { MdOutlineCall } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function ChatNav( { name, avatar }: { name: string, avatar: string } ) {
    return (

        <nav className="bg-sky-500 dark:bg-gray-900 px-4 py-0.5 min-h-16 w-full shadow-xl
             flex justify-between items-center gap-2">
            <div className="flex justify-center items-center gap-2">

                <div className="m-2">
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h2 className="text-md font-bold">{name}</h2>
                    <p className="text-xs">Last seen 3 hours ago</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">

                <MdOutlineCall className="m-2 text-2xl" />
                <IoMdSearch className="m-2 text-2xl" />
                <SlOptionsVertical className="m-2 text-xl" />
            </div>


        </nav>

    )
}

export default ChatNav
