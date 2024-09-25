// it should be named as SelectedChat / DisplyingChat

import SideUpNav from './chatSelectionComp/SideUpNav'
import AllChats from './chatSelectionComp/AllChats'
import type { Chat } from "@/data/onChatSelectSchema"


function SelectChat({ onChatSelect }: { onChatSelect: (chat: Chat) => void }) {
  return (
    <div className="bg-gray-400 dark:bg-gray-900 text-black dark:text-white h-screen flex flex-col">
      <SideUpNav  />
      <AllChats onChatSelect={onChatSelect} />
    </div>
  )
}

export default SelectChat
