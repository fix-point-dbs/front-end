import React from "react";

export default function Kotak() {
  const items = [
    { name: "Total Users", number: "2,300" },
    { name: "Active Users", number: "1,200" },
    { name: "New Users", number: "150" },
    { name: "Premium Users", number: "850" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
              {item.name}
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
              {item.number}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
