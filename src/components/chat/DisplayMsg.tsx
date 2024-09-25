
"use client"
import { useEffect, useRef } from "react";

import type { Message } from "@/data/onChatSelectSchema"

function DisplayMsg({ name, messages }: { name: string, messages: Message[] }) {
    // console.log(messages)

    const chatEndRef = useRef<HTMLDivElement>(null); // Reference to the end of the chat container

    // Scroll to the bottom when messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, [messages]);

    return (
        <div className="flex-grow w-full px-4 
        h-48  flex justify-center  bg-zinc-50 dark:bg-gray-950 dark:text-white
        ">

            <div className="w-full sm:w-7/12 py-4 overflow-y-auto scrollbar-hide">

                {messages.map((message) => (
                    (message.senderName === name) ? (
                        <div key={message.msgId} className="chat chat-start">
                            <div className="chat-bubble">{message.message}</div>
                        </div>
                    ) : (
                        <div key={message.msgId} className="chat chat-end">
                            <div className="chat-bubble">{message.message}</div>
                        </div>
                    )
                ))}

                {/* This is an empty div that serves as the scroll target */}
                <div ref={chatEndRef} />

            </div>

        </div>
    )
}

export default DisplayMsg


// sample message
// <div className="chat chat-start">
// <div className="chat-bubble">
//     It's over Anakin,
//     <br />
//     I have the high ground.
// </div>
// </div>
// <div className="chat chat-end">
// <div className="chat-bubble">You underestimate my power!</div>
// </div>