// src/hooks/useCitySearch.js
import { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

/**
 * Fetches city suggestions from WeatherAPI's search endpoint:
 * GET /search.json?key=YOUR_KEY&q=QUERY
 * Returns an array of locations with name, region, country :contentReference[oaicite:1]{index=1}
 */
export function useCitySearch(query) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setLoading(false);
        });
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [query]);

  return { suggestions, loading, error };
}
