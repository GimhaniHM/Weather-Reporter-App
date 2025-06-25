// src/components/AlertModal.jsx
import React from 'react';

export default function AlertModal({ show, message, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm mx-4">
        <p className="text-gray-900 dark:text-gray-100">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          OK
        </button>
      </div>
    </div>
  );
}
