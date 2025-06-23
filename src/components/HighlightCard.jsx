// components/HighlightCard.jsx
import React from 'react';

export default function HighlightCard({ title, icon, value, unit, extra }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[100px]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>
        {icon && <div className="text-gray-500 dark:text-gray-400">{icon}</div>}
      </div>
      <div className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
        {value}
        {unit && <span className="text-base font-medium text-gray-600 dark:text-gray-400"> {unit}</span>}
      </div>
      {extra && <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{extra}</div>}
    </div>
  );
}
