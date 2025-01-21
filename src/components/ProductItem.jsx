import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';


const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
     <>
      <div className={styles.productItemWrapper}>
        <Link className={styles.productItem} to={`/product/${id}`}>
          <div className={styles.productImage}>
            <img src={image[0]} alt={name} />
          </div>
          <p className={styles.productName}>{name}</p>
          <p className={styles.productPrice}>{currency}{price}</p>
        </Link>
      </div>

     </>
    )
}

export default ProductItem;
