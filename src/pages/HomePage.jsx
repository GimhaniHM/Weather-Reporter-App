import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import HighlightsSection from '../components/HighlightsSection'

export default function HomePage() {
    const [searchParams] = useSearchParams();
    const city = searchParams.get('city') || 'Colombo';
    const { data, loading, error, refetchWeather } = useWeather(city);

    const [showLoader, setShowLoader] = useState(false);

    // Log loading state for debugging
    useEffect(() => {
        console.log('🔄 Loading state changed:', loading);
        let timer;
        if (loading) timer = setTimeout(() => setShowLoader(true), 3000);
        else {
            setShowLoader(false);
            clearTimeout(timer);
        }
        return () => clearTimeout(timer);
    }, [loading]);

    return (
        <div className="relative min-h-screen">
            <main className="pt-1 bg-gray-50 dark:bg-gray-900 transition-colors">
                {data?.location && (
                    <div className="mt-8 ml-8 mr-8 flex flex-col lg:flex-row gap-6 items-stretch min-h-[600px]">
                        {/* Current Weather Card */}
                        <div className="h-full w-80">
                            <CurrentWeatherCard data={data} onRefresh={refetchWeather} />
                        </div>

                        {/* Highlights Section */}
                        <div className="flex-1 h-full">
                            <HighlightsSection />
                        </div>
                    </div>
                )}
            </main>

            {/* Blurred loading overlay */}
            {showLoader && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-50">
                    <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error message */}
            {error && (
                <p className="text-center text-red-600 mt-4">
                    Error: {error.message}
                </p>
            )}
        </div>
    );
}
