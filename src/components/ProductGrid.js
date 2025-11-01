import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <section className="product-grid">
      {products.map((product) => (
        
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;