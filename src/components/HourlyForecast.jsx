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
