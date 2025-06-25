// src/components/HourlyCard.jsx
import React from 'react';
import { FaWind } from 'react-icons/fa';
import { WiWindDeg } from "react-icons/wi";

export default function HourlyCard({ time, icon, temp, wind, windDegree, bgColor }) {
    return (
        <div className={`
  flex-shrink-0 w-20 rounded-xl p-2 flex flex-col items-center space-y-3
  ${bgColor || 'bg-white dark:bg-gray-700'}
  shadow-[4px_0px_6px_rgba(0,0,0,0.5)] dark:shadow-[4px_0px_12px_rgba(0,0,0,1)]
`}>



            {/* Time */}
            <span className="text-s font-bold text-gray-700 dark:text-gray-300">{time}</span>

            {/* Weather Icon */}
            <img src={icon} alt="" className="h-12 w-12" />

            {/* Temperature */}
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{Math.round(temp)}°c</span>

            {/* Wind */}
            <div className="flex flex-col items-center space-y-0.5">
                <WiWindDeg className="h-8 w-8 text-blue-500 dark:text-blue-700" style={{ transform: `rotate(${windDegree}deg)` }} />
                <span className="text-xs font-bold text-gray-900 dark:text-gray-100 text-center">
                    {Math.round(wind)} km/h
                </span>
            </div>
        </div>
    );
}