import { useState, useEffect, useRef } from "react";
import Image from "../assets/icons/current-location.png";
import { SendHorizonal, X } from "lucide-react";

export default function ChatBoth({ visible, onClose }) {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Motor Saya Mengeluarkan Asap Putih, Itu Kenapa Ya?" },
    { sender: "bot", text: "Sepertinya Kendaraan Anda Mengalami Kebocoran Oli Yang Masuk Ke Ruang Bakar." },
    { sender: "user", text: "Terus Gimana Dong?" },
    {
      sender: "bot",
      text: `Penanganan Awalnya:\n• Matikan Mesin Dan Biarkan Dingin Dulu.\n• Periksa Level Oli—Kalau Berkurang Drastis, Jangan Dipakai Lagi.\n• Hindari Menyalakan Motor Terus Menerus, Bisa Merusak Mesin.\n  Langkah Aman: Bawa Ke Bengkel Agar Dicek Bagian Ring Piston Atau Seal Klep.`,
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
    }
  };


  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[35rem] h-[40rem] max-h-[90vh] overflow-hidden">
      <div className="w-full h-full shadow-lg rounded-2xl bg-white p-4 flex flex-col">
      <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-600 p-1 rounded-md hover:bg-red-700" 
        >
          <X size={20} />
        </button>
        <div className="flex flex-col items-center">
          <img src={Image} alt="Logo Chatbot" className="w-12 h-12" />
          <h2 className="text-blue-800 font-bold mt-2">CHATBOTH</h2>
        </div>
        <div className="mt-4 space-y-3 flex-1 overflow-y-auto pr-2">
          {messages.map((msg, i) => (
           <div
           key={i}
           className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
         >
           <div
             className={`inline-block px-4 py-2 rounded-lg text-sm whitespace-pre-line ${
               msg.sender === "user"
                 ? "bg-blue-800 text-white rounded-br-none"
                 : "bg-gray-100 text-gray-900 rounded-bl-none"
             }`}
           >
             {msg.text}
           </div>
         </div>
         
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Chatbot.."
            className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-800 hover:bg-blue-900 p-2 rounded-lg"
          >
            <SendHorizonal className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
