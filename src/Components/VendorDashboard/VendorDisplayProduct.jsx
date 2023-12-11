import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorDisplayProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const vendorName = localStorage.getItem('vendorName');
        if (!vendorName) {
         return;
        }

        const response = await axios.get(`http://localhost:8000/products/getPoductByVendorName/${vendorName}`);
        setProducts(response.data);
      } catch (error) {
        
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);  

  return (
    <div className="dashb-container">
      <p className="add-title">Your Products</p>
      <div className='vendor-products-container'>
        {products.map((product) => (
          <div className='vendor-product' key={product._id}>
            <p className='product-desc'>Product Name: {product.name}</p>
            <img src={product.image} alt='Product' className='product-image' />
            <p className='product-desc'>Product Description: {product.description}</p>
            <p className='product-desc'>Product Price: {product.price}</p>
            <p className='product-desc'>Company: {product.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDisplayProduct;
