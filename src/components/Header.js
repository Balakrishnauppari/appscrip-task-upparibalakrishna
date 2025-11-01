import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-section">
        <span className="logo-text">Appscrip Store</span>
      </div>
      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>
      <div className="search-and-icons">
        <input type="text" placeholder="Search products..." className="search-input" />
        <button className="icon-btn">🛒</button>
      </div>
    </header>
  );
};

export default Header;