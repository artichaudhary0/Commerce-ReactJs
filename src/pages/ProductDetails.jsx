import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="product-detail-page">
      <h2>Product Details - {productId}</h2>
      <p>This is a detailed view of product {productId}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ProductDetails;