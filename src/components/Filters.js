import React from 'react';

const Filters = () => {
  
  return (
    <aside className="product-filters">
      <h2>Filter Products</h2>
      
      <div className="filter-group">
        <h3>Categories</h3>
        <label><input type="checkbox" name="category" value="electronics" /> Electronics</label>
        <label><input type="checkbox" name="category" value="jewelery" /> Jewelery</label>
  
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
        <input type="range" min="0" max="1000" className="price-slider" />
        <div className="price-display">$0 - $1000</div>
      </div>

      <button className="apply-filters-btn">Apply Filters</button>
    </aside>
  );
};

export default Filters;