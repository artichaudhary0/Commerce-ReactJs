import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();
  const showingProductDetails = location.pathname !== '/products';

  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="page products">
      <h1>Products</h1>
      <div className="products-container">
        {!showingProductDetails ? (
          <>
            <div className="categories">
              <h2>Categories</h2>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Products;