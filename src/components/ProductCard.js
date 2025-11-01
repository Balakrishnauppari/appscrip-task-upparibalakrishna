import React from 'react';
const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={image} 
          alt={`Image of ${title}`} 
          className="product-image" 
        />
      </div>
      <div className="product-info">
        <h3>{title}</h3> 
        <p className="product-price">
          **${price.toFixed(2)}**
        </p>
        <button className="add-to-cart-btn">
          View Details
        </button>
      </div>
    </article>
  );
};

export default ProductCard;