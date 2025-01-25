import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechStore</h1>
          <p>Discover the latest in technology and accessories</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <span className="feature-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <h3>Fast Delivery</h3>
          <p>Within 2-3 business days</p>
        </div>
        <div className="feature">
          <span className="feature-icon">💫</span>
          <h3>Premium Support</h3>
          <p>24/7 customer service</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product">
              <img src={product.image} alt={product.name} />
              <div className="featured-product-info">
                <h3>{product.name}</h3>
                <p className="featured-price">${product.price.toFixed(2)}</p>
                <Link to={`/products/${product.id}`} className="view-button">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest products and deals</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;