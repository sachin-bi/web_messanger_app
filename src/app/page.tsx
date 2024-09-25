"use client";
import { useState } from "react";

import ChatEmpty from "@/components/ChatEmpty";
import ChatSection from "@/components/ChatSection";
import SelectChat from "@/components/SelectChat";
import type { Chat } from "@/data/onChatSelectSchema"




export default function Home() {

  // State to store selected chat
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  // Function to update the selected chat
  const handleChatSelection = (chat: Chat) => {
    setSelectedChat(chat); // This will update the selected chat in the parent component
  };


  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="grid grid-cols-4 gap-0.5 min-h-screen">
        <div>
          <SelectChat onChatSelect={handleChatSelection} />
        </div>
        <div className="col-span-3 min-h-screen">
          {/* <ChatSection /> */}
          {/* <ChatEmpty /> */}
          {/* Conditionally render based on whether a chat is selected */}
          {selectedChat ? (
            <ChatSection chat={selectedChat} />
          ) : (
            <ChatEmpty />
          )}



        </div>
      </div>

    </main>
  );
}

// {/* Conditionally render based on whether a chat is selected */}
// {selectedChat ? (
//   <ChatSection chat={selectedChat} />
// ) : (
//   <ChatEmpty />
// )}