import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

if (!API_KEY) {
  throw new Error("Missing VITE_OPENWEATHER_API_KEY");
}

export const fetchForecastByCity = async (city: string) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return data;
};

export const fetchForecastByCoords = async (
  lat: number,
  lon: number
) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      lat,
      lon,
      units: "metric",
      appid: API_KEY,
    },
  });
  return data;
};
