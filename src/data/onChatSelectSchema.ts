interface Message {
  msgId: string;
  message: string;
  senderId: string;
  senderName: string;
  timestamp: string;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  messages: Message[];
}

export type { Chat , Message };
