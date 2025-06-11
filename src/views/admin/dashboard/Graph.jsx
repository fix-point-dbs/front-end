import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

export default function Graph({ grap }) {

      console.log(grap);
      

    return (        
        <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                    <h5 className="leading-none text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white pb-2">Booking</h5>
                    <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">Booking this month</p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-sm sm:text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    12%
                    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                </div>
            </div>
            <div className="mt-4">
            <ResponsiveContainer width="100%" height={250}>
                   <LineChart data={grap}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                     <YAxis tick={{ fontSize: 10 }} />
                     <Tooltip contentStyle={{ fontSize: 10 }} />
                     <Line
                       type="monotone"
                       dataKey="total"
                       stroke="#3B82F6"
                       strokeWidth={2}
                       isAnimationActive={true}
                     />
                   </LineChart>
                 </ResponsiveContainer>
            </div>

        </div>
    )
}
