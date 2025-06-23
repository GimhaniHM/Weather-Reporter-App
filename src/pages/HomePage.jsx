import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') || 'Colombo';
  const { data, loading, error } = useWeather(city);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => setShowLoader(true), 300); // Show loader after 300ms
    } else {
      setShowLoader(false);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  if (showLoader) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  }

  // Ensure data is not null before rendering CurrentWeatherCard
  if (data && data.location) {
    return (
      <div className="relative">
        <div className="mt-8 ml-8">
          <CurrentWeatherCard
            data={data}
            onRefresh={() => refetchWeather(city)}
          />
        </div>
        {/* other content below... */}
      </div>
    );
  }

  return null; // Or a fallback UI
}
