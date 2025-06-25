// src/components/WeeklyForecast.jsx
import React from 'react';
import DayForecastCard from './DayForecastCard';

export default function WeeklyForecast({ forecast }) {
    const daysToShow = forecast.forecastday.slice(1);
  return (
    <section className="w-80 h-full mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 pb-2 shadow-[4px_4px_8px_rgba(0,1,0,1)] dark:shadow-[0_4px_12px_rgba(1,0,0,1)]">
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">
        5 Days Forecast
      </h2>
      <div className="flex flex-col space-y-1">
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
