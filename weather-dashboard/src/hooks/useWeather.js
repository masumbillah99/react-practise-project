import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

/** Data get korar 2 ta process:

 * 1. আমি রেসপন্সটা নিয়ে নিলাম ও পুরো রেসপন্সটা আমাদের কম্পোনেন্টকে দিয়ে দিলাম,
    এবং প্র্রত্যেক কম্পোনেন্টে গিয়ে রেসপন্সটা বেছে বেছে প্রয়োজনীয় জিনিসপত্র বা অপশনস নিয়ে
    আমাদের কম্পোনেন্টে JSX এ দেখালাম।

 * 2. আমরা হুকের মধ্যে ডাটা মডেলিং বা Data structure করতে পারি

  
*/

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const { searchLocation } = useContext(LocationContext);

  // console.log("from use weather data");
  // console.log(searchLocation);

  // asynchronous calls for response
  const fetchWeatherData = async (lat, lon) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errMsg = `Fetching weather data failed: ${response.status}`;
        throw new Error(errMsg);
      }

      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        latitude: lat,
        longitude: lon,
      };
      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    setLoading({ ...loading, state: true, message: "Finding location..." });

    if (searchLocation.latitude && searchLocation.longitude) {
      fetchWeatherData(searchLocation?.latitude, searchLocation?.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [searchLocation.latitude, searchLocation.longitude]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
