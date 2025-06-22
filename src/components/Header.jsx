import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [query, setQuery] = useState('');
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/?city=${encodeURIComponent(query.trim())}`);
            setQuery('');
        }
    };

    return (
        <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 transition-colors">

            {/* Search Form */}
            <form
                onSubmit={handleSearch}
                className="relative flex-1 max-w-md mx-auto"
                role="search"
            >
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-500 dark:text-gray-400 -translate-y-1/2 pointer-events-none" />
                <input
                    type="search"
                    name="search"
                    aria-label="Search city"
                    placeholder="Search your preferred city…"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setIsDark((prev) => !prev)}
                aria-label="Toggle dark mode"
                className="ml-4 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {isDark ? (
                    <SunIcon className="h-5 w-5" />
                ) : (
                    <MoonIcon className="h-5 w-5" />
                )}
            </button>
        </header>
    );
}
