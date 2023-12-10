import { useState, useEffect } from 'react';
import '../Style/LatesProducts.css';
import ProductComponent from './ProductComponent';
import axios from 'axios'; // Make sure to have axios or any other HTTP client installed

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/products/getAllProduct');  
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='latestProducts'>
      <div className="titleContainer">
        <p className="Title">Everything You Need Right Here</p>
      </div>
      <div className='product-display'>
        {products.slice(0, 8).map((product) => (
         
          <ProductComponent
            key={product._id}
            id={product._id} 
            name={product.name}
            price={product.price}
            image={product.image}
          />

        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
