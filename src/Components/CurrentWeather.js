import React from 'react';

const CurrentWeather = ({ weather, unit }) => {
  const { name, main, weather: weatherInfo } = weather;
  const temperature = unit === 'metric' ? main.temp : (main.temp * 9/5) + 32;
  
  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <h3>{Math.round(temperature)}°{unit === 'metric' ? 'C' : 'F'}</h3>
      <p>{weatherInfo[0].description}</p>
      <img 
        src={`http://openweathermap.org/img/wn/${weatherInfo[0].icon}.png`} 
        alt="weather-icon" 
      />
    </div>
  );
};

export default CurrentWeather;
