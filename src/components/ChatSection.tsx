import ChatNav from "./chat/ChatNav"
import DisplayMsg from "./chat/DisplayMsg"
import InputForm from "./chat/InputForm"
import type { Chat } from "@/data/onChatSelectSchema"


function ChatSection({ chat }: { chat: Chat }) {

    const {  name, avatar, messages } = chat;


    return (
        <div className="bg-gray-400 dark:bg-gray-900 text-black dark:text-white h-full flex flex-col">
            <ChatNav name={name} avatar={avatar}  />
            <DisplayMsg name={name} messages={messages} />
            <InputForm />
        </div>
    )
}

export default ChatSection
