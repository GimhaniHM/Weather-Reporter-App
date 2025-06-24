// src/components/WeeklyForecast.jsx
import React from 'react';
import DayForecastCard from './DayForecastCard';

export default function WeeklyForecast({ forecast }) {
    const daysToShow = forecast.forecastday.slice(1);
  return (
    <section className="w-80 h-full mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 shadow-[4px_8px_16px_rgba(0,0,0,0.15)]">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">
        7 Days Forecast
      </h2>
      <div className="flex flex-col space-y-2">
        {daysToShow.map((day) => {
          const iconUrl = `https:${day.day.condition.icon}`;
          const temp = day.day.avgtemp_c;
          const date = new Date(day.date).toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
          });

          return (
            <DayForecastCard
              key={day.date}
              icon={iconUrl}
              temp={temp}
              date={date}
            />
          );
        })}
      </div>
    </section>
  );
}
