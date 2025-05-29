import React from "react";

export default function Information({
  bio = "Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
  fullName = "Alec M. Thompson",
  mobile = "(555) 123-4567",
  email = "alec.thompson@example.com",
  location = "New York, USA",
  socialMedia = "@alecthompson",
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-5 gap-2 w-full h-full dark:bg-gray-700">
      <div className="text-base font-semibold text-black dark:text-white">
        <h2>Profile Information</h2>
      </div>
      <div className="flex flex-col gap-4 text-gray-500 dark:text-gray-300">
        <p className="text-sm">{bio}</p>
        <div className="border-t border-gray-300" />
        <dl className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:gap-1 text-sm">
            <dt className="font-semibold text-black dark:text-white">Full Name:</dt>
            <dd>{fullName}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 text-sm">
            <dt className="font-semibold text-black dark:text-white">Mobile:</dt>
            <dd>{mobile}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 text-sm">
            <dt className="font-semibold text-black dark:text-white">Email:</dt>
            <dd>{email}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 text-sm">
            <dt className="font-semibold text-black dark:text-white">Location:</dt>
            <dd>{location}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-1 text-sm">
            <dt className="font-semibold text-blackdark:text-white">Social Media:</dt>
            <dd className="text-black dark:text-gray-300">{socialMedia}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}