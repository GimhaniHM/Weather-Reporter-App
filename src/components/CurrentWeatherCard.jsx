import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function CurrentWeatherCard({ data, onRefresh }) {
  const { location, current } = data;
  const local = new Date(location.localtime.replace(' ', 'T'));
  const time = local.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const date = local.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="w-80 bg-white dark:bg-gray-800 rounded-xl relative overflow-hidden shadow-[4px_8px_16px_rgba(0,0,0,0.15)] mt-8 ml-8">
      {/* Time & Date */}
      <div className="absolute top-4 left-4">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">{time}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">{date}</p>
      </div>

      {/* Location with filled green pin */}
      <div className="absolute top-7 right-4 flex items-center text-green-500">
        <MapPinIcon className="h-5 w-5 mr-1 fill-green-500" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
          {location.name}, {location.country}
        </span>
      </div>

      {/* Icon & Temperature */}
      <div className="flex justify-between items-center mt-16 px-9 py-4">
        <img src={`https:${current.condition.icon}`} alt={current.condition.text} className="h-20 w-20" />
        <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          {Math.round(current.temp_c)}°
        </span>
      </div>

      {/* Description & Feels Like */}
      <div className="text-center py-2">
        <p className="text-lg text-gray-700 dark:text-gray-300 capitalize">{current.condition.text}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Feels like {Math.round(current.feelslike_c)}°
        </p>
      </div>

      {/* Refresh Button */}
      <button
        onClick={onRefresh}
        className="absolute bottom-3 right-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:shadow-md transition"
        aria-label="Refresh weather"
      >
        <ArrowPathIcon className="h-6 w-6 text-gray-600 dark:text-gray-200 hover:animate-spin" />
      </button>
    </div>
  );
}
