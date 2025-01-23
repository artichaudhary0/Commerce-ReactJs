import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="product-details-content">
        <img src={product.image} alt={product.name} className="product-details-image" />
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <p className="product-details-price">${product.price.toFixed(2)}</p>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-category">Category: {product.category}</p>
          <div className="product-details-actions">
            <button 
              className="add-to-cart-large"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button onClick={() => navigate('/products')} className="back-button">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;