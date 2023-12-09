import React, { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../Style/ProductsPage.css";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8000/products/getAllProduct")
      .then((response) => {
        const modifiedProducts = response.data.map((product) => ({
          name: product.name,
          image: product.image,
          price: product.price
        }));
        setProducts(modifiedProducts);
        console.log(modifiedProducts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ProductsPage">
      <MenuBar />
      <div className="selectBar">
        <select className="selectCategory" id="selectCategory"></select>
        <input
          type="text"
          className="inputProduct"
          placeholder="Search Product"
        />
      </div>
      <div className="allProducts">
        {/* Display products */}
        {products.map((product, index) => (
          <ProductComponent key={index} name={product.name} price={product.price} image={product.image} />
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
