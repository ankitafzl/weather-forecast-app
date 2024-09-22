import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from './Utility/WeatherApi';
import CurrentWeather from './Components/CurrentWeather';
import ForecastCard from './Components/ForecastCard';
import SearchDropdown from './Components/SearchDropdown';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      try {
        const currentWeather = await fetchWeather(city);
        const forecastData = await fetchForecast(city);
        
        // Filter forecast data to get one entry per day (e.g., the entry closest to 12:00 PM)
        const dailyForecast = forecastData.list.filter((forecastItem) => 
          forecastItem.dt_txt.includes("12:00:00")
        );

        setWeather(currentWeather);
        setForecast(dailyForecast);  // Use filtered daily forecast data
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <SearchDropdown setCity={setCity} />
          {weather && <CurrentWeather weather={weather} unit={unit} />}
          <div className="forecast">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} unit={unit} />
            ))}
          </div>
          <button onClick={toggleUnit}>
            Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </button>
        </>
      )}
    </div>
  );
};

export default App;
