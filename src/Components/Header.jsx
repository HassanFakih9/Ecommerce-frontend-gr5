import React from "react";
import MenuBar from "./MenuBar";
import "../Style/Header.css";
import gif from '../images/gif.gif'
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <MenuBar />
        <div className="rowFlex">
        <div className="inside-header-container">
          <p className="bigText">
            Your Ultimate Destination For Online Shopping
          </p>
          <p className="smallText">
          Explore our curated collection of the finest electronics. Elevate your tech experience with our premium selection, featuring top-rated products.
          </p>
          <button className="shopBtn"> Shop Now</button>
        </div>
        <div className="inside-header-container">
            <img src={gif} className="gif" alt="gif"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
