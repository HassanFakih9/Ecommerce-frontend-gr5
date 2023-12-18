import React from "react";
import "../Style/Footer.css";
import logo from "../images/logo.jpg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-content">
          <img src={logo} className="footer-logo" />
          <p>
            We always make our customer happy by providing as many choises as
            possible.
          </p>
        </div>
        <div className="footer-content">
          <p className="footer-sub"> Company</p>
          <ul className="footer-ul">
            <li className="footer-li">About Us</li>
            <li className="footer-li">Features</li>
            <li className="footer-li">FAQ</li>
            <li className="footer-li">News</li>
          </ul>
        </div>
        <div className="footer-content">
          <p className="footer-sub"> Resources</p>
          <ul className="footer-ul">
            <li className="footer-li">Events</li>
            <li className="footer-li">Promo</li>
            <li className="footer-li">Demo</li>
            <li className="footer-li">More </li>
          </ul>
        </div>
        <div className="footer-content">
          <p className="footer-sub"> Support</p>
          <ul className="footer-ul">
            <li className="footer-li">Account</li>
            <li className="footer-li">Support System</li>
            <li className="footer-li">Contact Us</li>
            <li className="footer-li">Accessibility</li>
          </ul>
        </div>
        <div className="footer-content">
          <p className="footer-sub"> Contact Info</p>
          <p>e-lectronics@gmail.com </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
