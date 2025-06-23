// components/HighlightsSection.jsx
import React from 'react';
import HighlightCard from './HighlightCard';
import { useWeather } from '../hooks/useWeather';
import {
  SunIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  EyeDropperIcon,
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  MapPinIcon, // optional
} from '@heroicons/react/24/outline';


export default function HighlightsSection() {
  const { data } = useWeather();

  if (!data) return null;

  const { current, forecast, location } = data;
  const todayForecast = forecast?.forecastday[0];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Today's Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <HighlightCard
          title="UV Index"
          icon={<SunIcon className="h-5 w-5" />}
          value={current.uv}
        />
        <HighlightCard
          title="Wind Status"
          icon={<ArrowPathIcon className="h-5 w-5" />}
          value={current.wind_kph}
          unit="km/h"
          extra={`Direction: ${current.wind_dir}`}
        />
        <HighlightCard
          title="Sunrise & Sunset"
          icon={<ArrowUpCircleIcon className="h-5 w-5" />}
          value={todayForecast.astro.sunrise}
          unit=""
          extra={`Sunset: ${todayForecast.astro.sunset}`}
        />
        <HighlightCard
          title="Air Quality"
          icon={<EyeDropperIcon className="h-5 w-5" />}
          value={Math.round(current.air_quality?.pm2_5 || 0)}
          unit="PM2.5"
        />
        <HighlightCard
          title="Pressure"
          icon={<ArrowTrendingUpIcon className="h-5 w-5" />}
          value={current.pressure_mb}
          unit="mb"
        />
        <HighlightCard
          title="Humidity"
          icon={<ArrowDownCircleIcon className="h-5 w-5" />}
          value={current.humidity}
          unit="%"
        />
      </div>
    </div>
  );
}
