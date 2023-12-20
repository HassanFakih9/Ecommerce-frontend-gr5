import React, { useState, useEffect } from "react";
import "../Style/LatesProducts.css";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "http://localhost:8000/products/getAllProduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const nextSlide = () => {
    const lastIndex = products.length - 1;
    const newStartIndex =
      startIndex + 3 <= lastIndex ? startIndex + 3 : lastIndex;
    setStartIndex(newStartIndex);
  };

  const prevSlide = () => {
    const newStartIndex = startIndex - 3 >= 0 ? startIndex - 3 : 0;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="latestProducts">
      <div className="titleContainer">
        <p className="Title">Everything You Need Right Here</p>
      </div>
      <div className="product-slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${startIndex * 33.33}%)` }}
        >
          {products.slice(startIndex, startIndex + 3).map((product) => (
            <ProductComponent
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <button
          className={`prev ${startIndex === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          &#60;
        </button>
        <button
          className={`next ${
            startIndex + 3 >= products.length ? "disabled" : ""
          }`}
          onClick={nextSlide}
          disabled={startIndex + 3 >= products.length}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default LatestProducts;
