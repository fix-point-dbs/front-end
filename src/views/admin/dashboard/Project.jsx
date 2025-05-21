import React from "react";
export default function Project() {
    const items = [
        { title: "Modern", description: "As Uber works through a huge amount of internal management turmoil", img: "https://i.pravatar.cc/300" },
        { title: "Scandinavian", description: "Music is something that every person has his or her own opinion about", img: "https://i.pravatar.cc/300" },
        { title: "Minimalist", description: "Different people have different taste, and various types of music", img: "https://i.pravatar.cc/300" },
    ];

    return (
        <div className="flex flex-col bg-white rounded-lg p-5 gap-4 w-full h-full">
            <div className="text-base font-semibold text-black">
                <h2>Projects</h2>
                <p className="text-gray-500 font-normal text-sm">Architects design houses</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-start text-left">
                        <img
                            src={item.img}
                            alt={`${item.title} project`}
                            className="w-full h-32 object-cover rounded-md"
                        />
                        <h3 className="text-sm font-medium text-black mt-2">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                        <button className="text-xs text-teal-500 mt-2 border border-teal-500 px-2 py-1 rounded-full">VIEW ALL</button>
                    </div>
                ))}
                <div className="flex flex-col items-center justify-center text-start">
                    <button className=" w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl">+</button>
                    <p className="text-sm text-gray-500">Create a New Project</p>
                </div>
            </div>
        </div>
    );
}