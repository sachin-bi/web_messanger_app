

import ChatEmpty from "@/components/ChatEmpty";
import ChatSection from "@/components/ChatSection";
import SelectChat from "@/components/SelectChat";

export default function Home() {
  
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="grid grid-cols-4 gap-0.5 min-h-screen">
        <div>
          <SelectChat />
        </div>
        <div className="col-span-3 min-h-screen">
           <ChatSection /> 
          {/* <ChatEmpty /> */}


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