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
        <div className="relative min-h-screen px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
            <main className="max-w-6xl mx-auto pt-8">
                {data?.location && (
                    <>
                        {/* Top Section */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-6">
                            <div className="w-full lg:basis-1/3 h-full flex justify-center">
                                <CurrentWeatherCard data={data} onRefresh={refetchWeather} />
                            </div>
                            <div className="w-full lg:flex-1 h-full">
                                <HighlightsSection
                                    current={data.current}
                                    forecast={data.forecast}
                                    location={data.location}
                                />
                            </div>
                        </div>

                        {/* Bottom: weekly + hourly */}
                        <div className="flex flex-col lg:flex-row items-start gap-3">
                            {/* 7-day row */}
                            <div className="lg:basis-1/3">
                                <WeeklyForecast forecast={data.forecast} />
                            </div>
                            {/* Hourly (you already have HourlyForecast) */}
                            <div className="w-full lg:basis-1/3">
                                <HourlyForecast forecast={data.forecast} />
                            </div>
                        </div>
                    </>
                )}

                {showLoader && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-50">
                        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin" />
                    </div>
                )}

                {error && (
                    <p className="text-center text-red-600 mt-4">Error: {error.message}</p>
                )}
            </main>
        </div>
    );
}
