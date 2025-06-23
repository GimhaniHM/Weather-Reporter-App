// src/hooks/useWeather.js
import { useState, useEffect, useCallback } from 'react';
import { getCurrentWeather } from '../services/weatherService';

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const json = await getCurrentWeather(city);
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return { data, loading, error, refetchWeather: fetchWeather };
}
