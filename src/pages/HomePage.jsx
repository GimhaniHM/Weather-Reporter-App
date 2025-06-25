// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import HighlightsSection from '../components/HighlightsSection';
import WeeklyForecast from '../components/WeeklyForecast';
import HourlyForecast from '../components/HourlyForecast';

export default function HomePage() {
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city') || 'Colombo';
    const { data, loading, error, refetchWeather } = useWeather(city);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        let timer;
        if (loading) timer = setTimeout(() => setShowLoader(true), 300);
        else {
            clearTimeout(timer);
            setShowLoader(false);
        }
        return () => clearTimeout(timer);
    }, [loading]);

    return (
        <div className="relative min-h-screen px-4 sm:px-8 dark:from-gray-900 dark:to-gray-800 transition-colors bg-gradient-to-br from-gray-600 to-white dark:from-gray-900 dark:to-gray-800">
            <main className="max-w-6xl mx-auto pt-8 pb-8">
                {data?.location && (
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">

                        {/* Column 1 — 1/3 width on desktop */}
                        <div className="flex flex-col gap-8 order-1">
                            <CurrentWeatherCard data={data} onRefresh={refetchWeather} />
                            <WeeklyForecast forecast={data.forecast} />
                        </div>

                        {/* Column 2 — 2/3 width on desktop */}
                        <div className="flex flex-col gap-8 order-2">
                            <HighlightsSection
                                current={data.current}
                                forecast={data.forecast}
                                location={data.location}
                            />
                            <HourlyForecast forecast={data.forecast} />
                        </div>

                    </div>
                )}

                {showLoader && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-50">
                        <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
                    </div>
                )}

                {error && (
                    <p className="text-center text-red-600 mt-4">Error: {error.message}</p>
                )}
            </main>
        </div>
    );
}
