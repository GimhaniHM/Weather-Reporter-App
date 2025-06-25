// src/components/HourlyForecast.jsx
import React from 'react';
import HourlyCard from './HourlyCard';
import { getWeatherBgColorByCode } from '../utils/getWeatherBgColor';


export default function HourlyForecast({ forecast }) {
    const now = new Date();
    const currentHour = now.getHours();

    const todayHours = forecast.forecastday[0].hour;
    const tomorrowHours = forecast.forecastday[1]?.hour || [];

    const remainingToday = todayHours.slice(currentHour + 1);

    // Clamp today's data to max 7 hours
    let nextSeven = remainingToday.slice(0, 8);

    // If fewer than 7, pad with tomorrow's hours
    if (nextSeven.length < 8) {
        const needed = 8 - nextSeven.length;
        nextSeven = [...nextSeven, ...tomorrowHours.slice(0, needed)];
    }

    return (
        <section className="mt-8 h-full bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-[4px_4px_8px_rgba(0,1,0,1)] dark:shadow-[0_4px_12px_rgba(1,0,0,1)]">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
                Hourly Forecast
            </h2>
            <div className="flex space-x-2 overflow-x-auto px-2">
                {nextSeven.map((h) => {
                    const dateObj = new Date(h.time.replace(' ', 'T'));
                    const time = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
                    const iconUrl = `https:${h.condition.icon}`;
                    const bgColor = getWeatherBgColorByCode(h.condition.code);

                    return (
                        <HourlyCard
                            key={h.time}
                            time={time}
                            icon={iconUrl}
                            temp={h.temp_c}
                            wind={h.wind_kph}
                            windDegree={h.wind_degree}
                            bgColor={bgColor}
                        />
                    );
                })}
            </div>
        </section>
    );
}