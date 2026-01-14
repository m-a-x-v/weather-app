import { useState } from "react";
import {
  fetchForecastByCity,
  fetchForecastByCoords,
} from "../api/weatherApi";
import { getCurrentPosition } from "./useGeolocation";

export const useForecast = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadByCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchForecastByCity(city);
      setData(result);
    } catch (e) {
      setError("Failed to load forecast for city");
    } finally {
      setLoading(false);
    }
  };

  const loadByGeolocation = async () => {
    try {
      setLoading(true);
      setError(null);
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const result = await fetchForecastByCoords(latitude, longitude);
      setData(result);
    } catch (e) {
      setError("Failed to load forecast from geolocation");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    loadByCity,
    loadByGeolocation,
  };
};
