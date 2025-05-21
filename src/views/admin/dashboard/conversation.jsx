import React from "react";
export default function Conversation() {
    const items = [
        { name: "Esther Jackson", message: "Hi! I need more informations...", img: "https://i.pravatar.cc/100" },
        { name: "Esther Jackson", message: "Awesome work, can you change...", img: "https://i.pravatar.cc/100" },
        { name: "Esther Jackson", message: "Have a great afternoon...", img: "https://i.pravatar.cc/100" },
        { name: "Esther Jackson", message: "About files I can...", img: "https://i.pravatar.cc/100" },
    ];

    return (
        <div className="flex flex-col bg-white rounded-lg p-5 gap-4 w-full h-full">
            <div className="text-base font-semibold text-black">
                <h2>Conversation</h2>
            </div>
            <div className="flex flex-col gap-4 text-gray-500">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <img
                            src={item.img}
                            alt={`${item.name}'s avatar`}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex flex-col flex-1">
                            <span className="text-sm font-medium text-black">{item.name}</span>
                            <span className="text-sm">{item.message}</span>
                        </div>
                        <button className="text-sm text-teal-500 hover:underline">REPLY</button>
                    </div>
                ))}
            </div>
        </div>
    );
}