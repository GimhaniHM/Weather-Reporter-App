// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useCitySearch } from '../hooks/useCitySearch';

export default function Header() {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { suggestions, loading, error } = useCitySearch(query);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Toggle dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?city=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setShowDropdown(false);
    }
  };

  const handleCitySelect = (loc) => {
    navigate(`/?city=${encodeURIComponent(loc.name)}`);
    setQuery('');
    setShowDropdown(false);
  };

  return (
    <header className="relative flex items-center justify-between p-4 bg-gray-300 dark:bg-gray-800 transition-colors">
      <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto" role="search">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-500 dark:text-gray-400 -translate-y-1/2 pointer-events-none" />
        <input
          type="search"
          placeholder="Search your preferred city…"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => {
            if (suggestions.length) setShowDropdown(true);
          }}
        />

        {/* Dropdown */}
        {showDropdown && !loading && suggestions.length > 0 && (
          <ul
            ref={dropdownRef}
            className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-md max-h-60 overflow-y-auto"
          >
            {suggestions.map((loc) => (
              <li
                key={`${loc.name}-${loc.region}-${loc.country}`}
                onClick={() => handleCitySelect(loc)}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
              >
                <strong>{loc.name}</strong>
                {loc.region ? `, ${loc.region}` : ''}, {loc.country}
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark((d) => !d)}
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>
    </header>
  );
}
