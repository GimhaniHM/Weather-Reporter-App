export default function HighlightCard({ title, icon, value, unit, extra }) {
  return (
    <div className="h-40 bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 flex flex-col justify-between overflow-hidden">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 break-words">
          {title}
        </h3>
        {icon && (
          <div className="text-gray-500 dark:text-gray-400 flex-shrink-0">
            {icon}
          </div>
        )}
      </div>

      {/* Centered Value */}
      <div className="mt-4 flex justify-center">
        <span className="text-3xl font-bold text-gray-900 dark:text-white truncate">
          {value}
          {unit && (
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {' '}{unit}
            </span>
          )}
        </span>
      </div>

      {/* Optional Extra */}
      {extra && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 break-words">
          {extra}
        </div>
      )}
    </div>
  );
}
