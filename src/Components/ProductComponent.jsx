import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Style/ProductComponent.css';


const ProductComponent = ({ id, name, price, image }) => {
  return (
    <div>
      <div className='product' key={id}>
        <img src={image} className='image-product' alt={name} />
        <div className='product-information'>
          <div className='product-name'>
            {name}
            <br />
            Price: ${price}
          </div>
          <Link to={`/ProductComponent2/${id}`} className='add-to-cart'>View Product</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
