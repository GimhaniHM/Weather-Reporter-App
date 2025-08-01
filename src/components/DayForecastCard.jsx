// src/components/DayForecastCard.jsx
export default function DayForecastCard({ icon, temp, date }) {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl space-x-12">
      {/* Icon */}
      <img
        src={icon}
        alt=""
        className="h-15 w-15 flex-shrink-0"
      />

      {/* Temperature */}
      <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {Math.round(temp)}°c
      </span>

      {/* Date */}
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {date}
      </span>
    </div>
  );
}
