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


// // src/components/WeeklyForecast.jsx
// import React from 'react';

// export default function WeeklyForecast({ forecast }) {
//   return (
//     <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
//       <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
//         7‑Day Forecast
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//         {forecast.forecastday.map(day => {
//           const dateObj = new Date(day.date);
//           const weekday = dateObj.toLocaleDateString('en-GB', { weekday: 'short' });
//           const dayNum = dateObj.getDate();
//           const month = dateObj.toLocaleDateString('en-GB', { month: 'short' });

//           return (
//             <div
//               key={day.date}
//               className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-center"
//             >
//               <span className="text-sm text-gray-600 dark:text-gray-300">
//                 {weekday} {dayNum}
//               </span>
//               <img
//                 src={`https:${day.day.condition.icon}`}
//                 alt={day.day.condition.text}
//                 className="h-12 w-12 my-2"
//               />
//               <span className="text-lg font-bold text-gray-900 dark:text-white">
//                 {Math.round(day.day.avgtemp_c)}°
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
