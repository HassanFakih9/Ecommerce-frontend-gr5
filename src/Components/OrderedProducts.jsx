import React from "react";
import "../Style/OrderPage.css";
import bin from "../images/bin.svg";

const orderedProduct = () => {
  return (
    <div className="orderedProductIndo">
     
      <p className="orderProductName ">Product Name</p>
      <p className="orderProductName ">90 $</p>
      <img src={bin} className="bin" />
    </div>
  );
};

export default orderedProduct;
