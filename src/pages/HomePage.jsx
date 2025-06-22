import { useSearchParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import CurrentWeatherCard from '../components/CurrentWeatherCard';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') || 'Colombo';
  const { data, loading, error } = useWeather(city);

  if (loading) return <p className="text-center">Loading…</p>;
  if (error)  return <p className="text-center text-red-600">Error: {error.message}</p>;

  return (
    <div className="space-y-6">
      <CurrentWeatherCard data={data} />
      {/* Next: HighlightsSection, WeeklyForecastStrip */}
    </div>
  );
}
