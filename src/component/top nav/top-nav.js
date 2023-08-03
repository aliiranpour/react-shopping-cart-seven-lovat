import React, { useState } from 'react';
import data from '../data/data.js';
import './top-nav.css';

const Topnav = ({ onSortChange, onFilterChange }) => {
  const [sortingOption, setSortingOption] = useState('lowest');
  const [filterOption, setFilterOption] = useState('ALL');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortingOption(selectedOption);
    onSortChange(selectedOption);
  };

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setFilterOption(selectedOption);
    onFilterChange(selectedOption);
  };

  return (
    <div className="topnav">
      <div>
        <span>{data.length} Product</span>
      </div>
      <div>
        <span>Order </span>
        <select value={sortingOption} onChange={handleSortChange}>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div>
        <span>Filter </span>
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Topnav;
