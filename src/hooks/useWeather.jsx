import { useState, useEffect } from 'react';
import { getCurrentWeather } from '../services/weatherService';

export function useWeather(city = 'Colombo') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCurrentWeather(city)
      .then((d) => {
        setData(d);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return { data, loading, error };
}
