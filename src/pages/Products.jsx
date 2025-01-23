import { Link, Outlet } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div className="page products">
      <h1>Products</h1>
      <div className="products-container">
        <div className="product-list">
          <h2>Product List</h2>
          {products.map(product => (
            <Link 
              key={product.id}
              to={`/products/${product.id}`}
              className="product-link"
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className="product-details">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;