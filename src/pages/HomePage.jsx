import { useSearchParams } from 'react-router-dom';
// import { useWeather } from '../hooks/useWeather';
// import WeatherCard from '../components/WeatherCard';

export default function HomePage() {
//   const [searchParams] = useSearchParams();
//   const city = searchParams.get('city') || 'Colombo';
//   const { data, loading, error } = useWeather(city);

  return (
    // <main className="pt-4">
    //   {loading && (
    //     <div className="mt-8 text-center text-gray-600">
    //       Loading weather for <strong>{city}</strong>…
    //     </div>
    //   )}
    //   {error && (
    //     <div className="mt-8 text-center text-red-600">
    //       Error fetching data: {error.message}
    //     </div>
    //   )}
    //   {data && (
    //     <div className="mt-4 space-y-6">
    //       <WeatherCard data={data} />
    //       {/* TODO: include KPIHighlights, WeeklyForecast, etc */}
    //     </div>
    //   )}
    // </main>
    <p>This is the Home Page</p>
  );
}
