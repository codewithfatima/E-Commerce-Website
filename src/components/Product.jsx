import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './Product.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set default image on load
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (productData === null) {
    return <div>Loading...</div>;
  }

  // Fallback image in case product has no images
  const mainImage = productData.image && productData.image.length > 0 ? productData.image[0] : '/path/to/default/image.jpg';

  return (
    <>
      <div className="product-container">
        <div className="image-gallery">
          {productData.image && productData.image.map((item, index) => (
            <img 
              onClick={() => setImage(item)} 
              src={item} 
              alt={`Product image ${index}`} 
              key={index} 
              className="thumbnail-image" 
            />
          ))}
        </div>
        <div className="product-details">
          <img src={mainImage} alt="Main Product" className="main-image" />
          <div className="text-container">
            <h5 className="product-name">{productData.name}</h5>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="pl-2">(122)</p>
            </div>

            <p className="price">
              {currency}{productData.price || 'N/A'}
            </p>
            <p className="description">{productData.description}</p>

            <div className="size-selection">
              <p className="size-label">Select Size</p>
              <div className="size-buttons">
                {Array.isArray(productData.sizes) && productData.sizes.length > 0 ? (
                  productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`size-button ${item === size ? 'selected' : ''}`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p>No sizes available</p>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                if (size) {
                  addToCart(productData._id, size);
                } else {
                  alert('Please select a size before adding to cart');
                }
              }}
              className="add-to-cart"
              disabled={!size} // Disable button if size is not selected
            >
              Add to Cart
            </button>

            <div className="bottom-content">
              <p>100% original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Each return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className="review">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Review (122)
          </button>
        </div>
        <div className="tab-content">
          <div className={`tab ${activeTab === 'description' ? 'active' : ''}`}>
            <p>{productData.description || 'No description available'}</p>
          </div>
          <div className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}>
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
