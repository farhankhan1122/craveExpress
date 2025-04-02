import React, { useState } from 'react';
import { groceryData } from '../utils.js/groceryData';
import './Grocery.css';

const Grocery = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(groceryData.map(item => item.category))];

  const filteredItems = groceryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grocery-container">
      <div className="grocery-hero">
        <h1>Grocery Store</h1>
        <p>
          Shop for fresh groceries, household items, and more. 
          All delivered to your doorstep in minutes.
        </p>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for groceries..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grocery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="grocery-card">
            <img src={item.image} alt={item.name} className="grocery-image" />
            <div className="grocery-content">
              <h3 className="grocery-name">{item.name}</h3>
              <p className="grocery-description">{item.description}</p>
              <div className="grocery-details">
                <span className="grocery-price">{item.price}</span>
                <span className="grocery-rating">
                  ⭐ {item.rating}
                </span>
              </div>
              <span className="grocery-category">{item.category}</span>
              <div className="grocery-delivery">
                🚚 {item.deliveryTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;