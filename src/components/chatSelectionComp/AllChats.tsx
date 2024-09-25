"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import chatData from "@/data/chatData.json"




function AllChats() {

    const updateChatSection = (chat: any) => {

        // use props to pass data
        const { id, name, avatar, messages } = chat;
        console.log(id, name, avatar, messages)
    };





    // bg-slate-400 dark:bg-zinc-900
    return (

        <ScrollArea className="h-full w-full p-0.5 border-solid  ">
            <ul className="menu w-full p-0 [&_li>*]:rounded-none text-black dark:text-white text-lg" >
                {chatData.allChats.map((chat) => (
                    <li key={chat.id}>
                        <button onClick={() => updateChatSection(chat)} className=" px-4 py-3 min-h-16 w-full flex justify-between items-center gap-2">
                            <div className="flex justify-center items-center gap-2">

                                <div className="m-2">
                                    <Avatar>
                                        <AvatarImage src={chat.avatar} />
                                        <AvatarFallback>SP</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <h2 className="text-md font-light">{chat.name} </h2>
                                    {/* <p className="text-xs">Last msg here</p> */}
                                    <p className="text-xs">{chat.messages[chat.messages.length - 1].message}</p>
                                </div>
                            </div>
                        </button>
                    </li>
                ))}



                {/* <li>
                    <button className=" px-4 py-3 min-h-16 w-full flex justify-between items-center gap-2">
                        <div className="flex justify-center items-center gap-2">

                            <div className="m-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>SP</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <h2 className="text-md font-light">Nandani</h2>
                                <p className="text-xs">Last msg here</p>
                            </div>
                        </div>
                    </button>
                </li> */}


            </ul>
        </ScrollArea>

    )
}

export default AllChats
