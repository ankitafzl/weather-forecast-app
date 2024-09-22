///Weather Forecast Application

A responsive weather forecast application built using React.js, which fetches current weather and a 5-day forecast for a given city using the OpenWeatherMap API. The app also features a city search, temperature unit conversion, and a visually appealing UI with weather icons and custom components.

///Features
Display current weather and 5-day forecast for a default city.
Search for cities and fetch weather data.
Reusable weather cards for daily forecasts.
Toggle between Celsius and Fahrenheit units.
Responsive design for various screen sizes.

///Table of Contents
Installation
Usage
Assumptions
Technology Stack
Folder Structure
Known Issues
Installation
Prerequisites
Before running this application, ensure you have the following installed on your system:

Node.js (version 14 or higher)
npm or yarn (for managing dependencies)
OpenWeatherMap API key (sign up here)
Steps to Set Up the Project Locally

//Clone the repository:
git clone https://github.com/yourusername/weather-app.git
cd weather-app

//Install dependencies: Using npm:
npm install


Or using yarn:
yarn install

///Create a .env file in the project root and add your API key:
In the root of the project, create a .env file and add the following line:
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
Run the project: Using npm:
npm start
Or using yarn:
yarn start
The app should now be running on http://localhost:3000.

///Usage
City Search:
Type a city name in the search box.
The app will fetch weather data for the entered city and display it, including the current weather and 5-day forecast.
If the city is not found or there is a network issue, a relevant error message will be displayed.
Temperature Unit Toggle:
Use the toggle button (°C/°F) to switch between Celsius and Fahrenheit for all temperature displays.
The current unit state is maintained, and the temperatures are updated accordingly.
Components:
WeatherCard: Displays the current temperature, weather condition, and weather icon for the day.
ForecastCard: Reusable component to show the forecast for each of the next 5 days.
SearchBox: Custom component for searching cities.
Assumptions
The default city for weather information is set to New York.
The API provides accurate weather data, and no manual manipulation of the fetched data is done (except temperature conversion).
Error handling is done gracefully for network issues and incorrect city searches.
Technology Stack
React.js: Frontend framework for building the UI.
Axios: For making API requests to OpenWeatherMap.
OpenWeatherMap API: Used to fetch weather data.
CSS/Tailwind CSS: For styling and responsiveness.
Environment Variables: For securely storing the OpenWeatherMap API key.

///Folder Structure
src/
├── components/
│   ├── CurrentWeather.js  // Displays current weather
│   ├── ForecastCard.js        // Displays 5-day forecast
│   ├── Searchbar.js       // Custom city search bar
│   ├── SearchDropdown.js // Custom city search dropdown
├── App.js                 // Main App component
├── Utility/                   // API requests to fetch weather data
│   ├── WeatherApi.js
├── styles/                // Global and component-specific styles
│   └── App.css
└── index.js               // Entry point of the application

Known Issues
The OpenWeatherMap API may have rate limits for free users, which can cause delays if too many requests are made in a short period.
The application requires an active internet connection to fetch weather data.
The UI could be further enhanced with animations or additional weather details.
