import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  // eslint-disable-next-line
  console.log(null);
  const [trip, setTrip] = useState('');
  // eslint-disable-next-line
  console.log(trip);
  return (
    <div className="input-box">
      <input
        type="text"
        name="name"
        className="input label"
        placeholder="vikash"
        onChange={(e) => (setTrip(e.target.value))}
      />
    </div>
  );
};
export default Search;
