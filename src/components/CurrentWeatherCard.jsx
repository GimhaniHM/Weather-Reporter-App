import React from 'react';

export default function CurrentWeatherCard({ data }) {
  const { location, current } = data;

  // Convert local time string (YYYY-MM-DD HH:mm) to a Date
  const localTimeStr = location.localtime;
  const localDateObj = new Date(localTimeStr.replace(' ', 'T'));

  const time = localDateObj.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const date = localDateObj.toLocaleDateString([], {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {location.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {time}, {date}
          </p>
        </div>
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          className="h-16 w-16"
        />
      </div>

      <div className="mt-4 flex items-center">
        <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          {Math.round(current.temp_c)}°
        </span>
        <span className="ml-2 text-gray-500 dark:text-gray-400">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}
