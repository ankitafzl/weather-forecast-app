import React from 'react';

const ForecastCard = ({ day, unit }) => {
  const temp = unit === 'metric' ? day.main.temp : (day.main.temp * 9/5) + 32;

  return (
    <div className="forecast-card">
      <h4>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
      <p>{Math.round(temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
      <img 
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
        alt="weather-icon" 
      />
    </div>
  );
};

export default ForecastCard;
