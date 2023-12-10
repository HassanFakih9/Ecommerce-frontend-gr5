
import React, { useState, useEffect } from "react";
const VendorAddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/category/getAllCategories"
      );
      const data = await response.json();
      setCategories(data); // Assuming the response returns an array of category objects
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="dashb-container">
      <p className="add-title">Add Your Product</p>
      <div className="product-input-container">
        <p className="product-label"> Product Name</p>
        <input type="text" className="product-input" />

        <p className="product-label"> Description</p>
        <input type="textarea" className="product-input" />

        <p className="product-label"> Price</p>
        <input type="number" className="product-input" />
        
        <p className="product-label"> Category</p>
        <select
          className="selectCategory"
          id="selectCategory"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
        <p className="product-label"> Upload Image</p>
        <input type="text" className="product-input" />

        <p className="product-label"> Quantity</p>
        <input type="number" className="product-input" />
      </div>
    </div>
  );
};

export default VendorAddProducts;
