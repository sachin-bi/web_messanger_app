import ChatNav from "./chat/ChatNav"
import DisplayMsg from "./chat/DisplayMsg"
import InputForm from "./chat/InputForm"


function ChatSection() {
    return (
        <div className="bg-gray-400 dark:bg-gray-900 text-black dark:text-white min-h-full flex flex-col">
            <ChatNav/>
            <DisplayMsg/>
            <InputForm/>
        </div>
    )
}

export default ChatSection
