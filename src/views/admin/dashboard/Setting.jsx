import { Subscript } from "lucide-react";
import React, { useState } from "react";

export default function Setting() {
  const [toggles, setToggles] = useState({
    follow: false,
    answer: false,
    mention: false,
    newproject: false,
    monthly: false,
    subscribe: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-5 gap-3 w-full h-full dark:bg-gray-700">
      <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
        <h1>Platform Setting</h1>
      </div>
      <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-300">
        <p className="font-medium text-gray-700 dark:text-gray-100">Account</p>
        <label htmlFor="toggle-follow" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-follow"
            checked={toggles.follow}
            onChange={() => handleToggle("follow")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Email me when someone follows me
          </span>
        </label>
        <label htmlFor="toggle-answer" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-answer"
            checked={toggles.answer}
            onChange={() => handleToggle("answer")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Email me when someone answers on my post
          </span>
        </label>
        <label htmlFor="toggle-mention" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-mention"
            checked={toggles.mention}
            onChange={() => handleToggle("mention")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Email me when mentions me
          </span>
        </label>
      </div>
      <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-300">
        <p className="font-medium text-gray-700 dark:text-gray-100">Application</p>
        <label htmlFor="toggle-newproject" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-newproject"
            checked={toggles.newproject}
            onChange={() => handleToggle("newproject")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            New launches and projects
          </span>
        </label>
        <label htmlFor="toggle-monthly" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-monthly"
            checked={toggles.monthly}
            onChange={() => handleToggle("monthly")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Monthly product updates
          </span>
        </label>
        <label htmlFor="toggle-subscribe" className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle-subscribe"
            checked={toggles.subscribe}
            onChange={() => handleToggle("subscribe")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-[22px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-gray-200 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            Subscribe to newsletter
          </span>
        </label>
      </div>
    </div>
  );
}