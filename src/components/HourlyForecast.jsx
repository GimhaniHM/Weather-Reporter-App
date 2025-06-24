// src/components/HourlyForecast.jsx
import React from 'react';
import HourlyCard from './HourlyCard';

export default function HourlyForecast({ forecast }) {
  const now = new Date();
  const currentHour = now.getHours();

  const todayHours = forecast.forecastday[0].hour;
  const tomorrowHours = forecast.forecastday[1]?.hour || [];

  // Get remaining hours of today starting from next hour
  const remainingToday = todayHours.slice(currentHour + 1);

  // If not enough, take additional hours from tomorrow
  const neededCount = 7 - remainingToday.length;
  const fromTomorrow = tomorrowHours.slice(0, neededCount);

  // Combine both
  const nextSevenHours = [...remainingToday, ...fromTomorrow];

  return (
    <section className="mt-8 h-full mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 shadow-[4px_8px_16px_rgba(0,0,0,0.15)]">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
        Hourly Forecast
      </h2>
      <div className="flex space-x-2 overflow-x-auto px-2">
        {nextSevenHours.map((h) => {
          const dateObj = new Date(h.time.replace(' ', 'T'));
          const time = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
          const iconUrl = `https:${h.condition.icon}`;
          return (
            <HourlyCard
              key={h.time}
              time={time}
              icon={iconUrl}
              temp={h.temp_c}
              wind={h.wind_kph}
              windDegree={h.wind_degree}
            />
          );
        })}
      </div>
    </section>
  );
}