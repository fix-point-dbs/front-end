import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { ArrowDownCircle, MessageSquare } from "lucide-react";
import { ChatPresenter } from "../presenters/ChatPresenter";
const socket = io(import.meta.env.VITE_BASE_URL);
import { getUser } from "../utils/LocalStorage";
import { faTools, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
const ChatPage = ({ isOpen, onClose, user_id, mitra_id, name }) => {

  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [input, setInput] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);
  const scrollRef = useRef();
  const sender_id = getUser().id
  const presenter = new ChatPresenter({ setMessages, setChatId, mitra_id, user_id });
  useEffect(() => {
    presenter.loadMessages()
    socket.emit("join_chat", chatId);

    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [chatId]);
  // Scroll ke bawah saat chat box pertama kali dibuka
useEffect(() => {
  if (isOpen && scrollRef.current) {
    // Delay sedikit agar DOM render selesai
    setTimeout(() => {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 100);
  }
}, [isOpen]);

  useEffect(() => {
    if (isAtBottom && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAtBottom]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 100);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setIsAtBottom(true);
  };

  if (!isOpen) return null;
  const sendMessage = () => {
    if (!input.trim()) return;
    socket.emit("send_message", {
      chat_id: chatId,
      sender_id: sender_id,
      message: input,
    });
    setInput("");
  };

  return (
    <div className="fixed bottom-5 border bg-slate-50 rounded-lg right-5 z-[9999]">
      <div className="max-w-xl mx-auto p-4 space-y-4">

        <div className="flex justify-between">
        <h1>
          <FontAwesomeIcon icon={faTools} className="mr-2" />
          {name}
        </h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faClose} className="text-red-500 font-bold text-[20px]" />
          </button>
        </div>
        <div
          className="border rounded-lg h-80 overflow-y-auto bg-gray-100 p-4 flex flex-col space-y-2 shadow-inner relative"
          ref={scrollRef}
           id="chat-scroll-box"
          onScroll={handleScroll}
        >
          {messages?.map((msg, i) => {
            const isSender = msg.sender_id === sender_id;

            return (
              <div
                key={i}
                className={`flex items-start gap-2 max-w-[70%] ${
                  isSender ? "self-end flex-row-reverse" : ""
                }`}
              >
                {/* <div className="text-2xl">{user.avatar}</div> */}
                <div
                  className={`p-2 rounded-md ${
                    isSender
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black border"
                  }`}
                >
                  {/* <span className="text-xs font-semibold block">{isSender ? 'You' : user.name}</span> */}
                  <span>{msg.message}</span>
                  {isSender ? (     
                  <span className="text-xs text-white block mt-1">
                    {moment(msg.createdAt).format("HH:mm")}{" "}
                  </span>
                  ) : (
                    <span className="text-xs text-black block mt-1">
                      {moment(msg.createdAt).format("HH:mm")}{" "}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Tombol scroll ke bawah */}
          {!isAtBottom && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600"
            >
              <ArrowDownCircle size={24} />
            </button>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
