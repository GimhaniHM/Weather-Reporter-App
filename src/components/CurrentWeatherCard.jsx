import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function CurrentWeatherCard({ data, forecastDay, onRefresh }) {
  const { location, current } = data;
  const { maxtemp_c, mintemp_c, maxtemp_f, mintemp_f } = forecastDay.day;

  const local = new Date(location.localtime.replace(' ', 'T'));
  const time = local.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const parts = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).formatToParts(local);
  const weekday = parts.find((p) => p.type === 'weekday')?.value;
  const day = parts.find((p) => p.type === 'day')?.value;
  const month = parts.find((p) => p.type === 'month')?.value;
  const date = `${weekday}, ${day} ${month}`;

  const [unit, setUnit] = useState('c'); // 'c' for Celsius, 'f' for Fahrenheit

  // Values to display based on selected unit
  const displayTemp = unit === 'c' ? Math.round(current.temp_c) : Math.round(current.temp_f);
  const displayHigh = unit === 'c' ? Math.round(maxtemp_c) : Math.round(maxtemp_f);
  const displayLow = unit === 'c' ? Math.round(mintemp_c) : Math.round(mintemp_f);
  const feelsLike = unit === 'c' ? current.feelslike_c : current.feelslike_f;

  const handleRefresh = (e) => {
    const btn = e.currentTarget;
    const icon = btn.querySelector('svg');

    btn.classList.add('ring-2', 'ring-blue-400');
    icon.classList.add('animate-[spin_0.6s_linear]');

    onRefresh();

    setTimeout(() => {
      icon.classList.remove('animate-[spin_0.6s_linear]');
      btn.classList.remove('ring-2', 'ring-blue-400');
    }, 600);
  };

  const toggleTemperatureUnit = () => {
    setUnit((prev) => (prev === 'c' ? 'f' : 'c'));
  };

  return (
    <div className="w-80 bg-gray-100 dark:bg-gray-800 rounded-xl relative overflow-hidden h-full flex flex-col pb-5 shadow-[4px_4px_8px_rgba(0,1,0,1)] dark:shadow-[0_4px_12px_rgba(1,0,0,1)]">
      {/* Time & Date */}
      <div className="absolute top-4 left-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{time}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">{date}</p>
      </div>

      {/* Location */}
      <div className="absolute top-7 right-4 flex items-start space-x-1 max-w-[50%]">
        <MapPinIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200 break-words leading-tight">
          {location.name}, {location.country}
        </span>
      </div>

      {/* Icon & Temperature */}
      <div className="flex justify-between items-center mt-16 px-3 py-4 relative">
        <img src={`https:${current.condition.icon}`} alt={current.condition.text} className="h-40 w-40" />
        <div className="pr-5 flex flex-col items-center">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            {displayTemp}°{unit}
          </span>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            High: {displayHigh}° Low: {displayLow}°
          </div>
        </div>

        {/* Toggle Unit Button */}
        <div className="absolute top-4 right-8">
          <button
            onClick={toggleTemperatureUnit}
            className="px-6 py-1 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full font-semibold"
            aria-label="Toggle Celsius Fahrenheit"
          >
            {unit === 'c' ? '°F' : '°C'}
          </button>
        </div>
      </div>

      {/* Description & Feels Like */}
      <div className="text-center py-1 mx-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 capitalize break-words">{current.condition.text}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Feels like {feelsLike}°{unit.toUpperCase()}
        </p>
      </div>

      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        className="absolute bottom-3 right-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none"
        aria-label="Refresh weather"
      >
        <ArrowPathIcon className="h-6 w-6 text-gray-600 dark:text-gray-200" />
      </button>
    </div>
  );
}
