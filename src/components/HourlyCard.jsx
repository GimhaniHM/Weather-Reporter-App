// src/components/HourlyCard.jsx
import React from 'react';
import { FaWind } from 'react-icons/fa';
import { WiWindDeg } from "react-icons/wi";

export default function HourlyCard({ time, icon, temp, wind, windDegree }) {
  return (
    <div className="flex-shrink-0 w-20 bg-white dark:bg-gray-700 rounded-xl shadow-md p-2 flex flex-col items-center space-y-3">
      {/* Time */}
      <span className="text-s font-bold text-gray-700 dark:text-gray-300">{time}</span>

      {/* Weather Icon */}
      <img src={icon} alt="" className="h-12 w-12" />

      {/* Temperature */}
      <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{Math.round(temp)}°c</span>

      {/* Wind */}
      <div className="flex flex-col items-center space-y-0.5">
        <WiWindDeg className="h-8 w-8 text-blue-500 dark:text-blue-400" style={{ transform: `rotate(${windDegree}deg)` }}/>
        <span className="text-xs font-bold text-gray-900 dark:text-gray-100 text-center">
          {Math.round(wind)} km/h
        </span>
      </div>
    </div>
  );
}