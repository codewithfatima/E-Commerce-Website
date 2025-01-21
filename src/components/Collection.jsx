import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Collection.css';
import ProductItem from './ProductItem';
import Title from './Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('default');

  // Handle category toggle
  const toggleCategory = (e) => {
    setCategory(prev =>
      prev.includes(e.target.value)
        ? prev.filter(item => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  // Handle subcategory toggle
  const togglesubCategory = (e) => {
    setSubCategory(prev =>
      prev.includes(e.target.value)
        ? prev.filter(item => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  // Set defaults to show all products when `products` are loaded
  useEffect(() => {
    if (products?.length > 0) {
      setFilterProduct(products);
    }
  }, [products]);

  // Handle filtering logic
  useEffect(() => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy.length > 0 ? productsCopy : products);
  }, [category, subCategory, products]);

  // Handle sorting
  useEffect(() => {
    if (filterProduct.length > 0) {
      let fpCopy = [...filterProduct];
      switch (sortType) {
        case 'low-high':
          fpCopy.sort((a, b) => a.price - b.price);
          break;

        case 'high-low':
          fpCopy.sort((a, b) => b.price - a.price);
          break;

        default:
          break;
      }

      setFilterProduct(fpCopy);
    }
  }, [sortType, filterProduct]);

  return (
    <div className="collection-container">
      {/* Filters */}
      <div className="filter-container">
        <p className='prata-regular'>Filters</p>
        <div className="filter-section">
          <p className="filter-title">CATEGORIES</p>
          <div className="filter-options-list">
            <label className="filter-option">
              <input type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </label>
            <label className="filter-option">
              <input type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </label>
            <label className="filter-option">
              <input type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>
        <div className="filter-section">
          <p className="filter-title">TYPE</p>
          <div className="filter-options-list">
            <label className="filter-option">
              <input type="checkbox" value={'Topwear'} onChange={togglesubCategory} /> Topwear
            </label>
            <label className="filter-option">
              <input type="checkbox" value={'Bottomwear'} onChange={togglesubCategory} /> Bottomwear
            </label>
            <label className="filter-option">
              <input type="checkbox" value={'Winterwear'} onChange={togglesubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className='flex-1'>
        <div className="flex  text-base sm:text-2xl mb-4 justify-center ml-18">
          <Title   text1={'ALL'} text2={'COLLECTION'}  />
          <select onChange={(e) => setSortType(e.target.value)} className='option' style={{ border: '1px solid gray' }}>
            <option className='option' value='relevant'>Sort by: Relevant</option>
            <option className='option' value='low-high'>Sort by: Low to High</option>
            <option className='option' value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='map_products'>
          {filterProduct.length > 0 ? (
            filterProduct.map((item) => (
              <ProductItem key={item._id} 
              name={item.name}
               id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Collection;
