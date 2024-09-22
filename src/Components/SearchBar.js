import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Fetch suggestions based on input query
  };

  const handleSelectCity = (city) => {
    onSearch(city);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search city..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSelectCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;