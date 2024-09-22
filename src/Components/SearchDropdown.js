import React, { useState } from 'react';

const SearchDropdown = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input);
      setInput('');
    }
  };

  return (
    <div className="search-dropdown">
      <form onSubmit={handleSubmit}>
        <input 
          className="search-box"
          type="text" 
          placeholder="Search city..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchDropdown;
