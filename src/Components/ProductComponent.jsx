import React from 'react';
import '../Style/ProductComponent.css';

const ProductComponent = ({ key, name, price, image }) => {
 

  return (
    <div>
      <div className='product' key={key}>
        <img src={image} className='image-product' alt={name} />
        <div className='product-information'>
          <div className='product-name'>
            {name}
            <br />
            Price: ${price}
          </div>
          <div className='add-to-cart'>Add To Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
