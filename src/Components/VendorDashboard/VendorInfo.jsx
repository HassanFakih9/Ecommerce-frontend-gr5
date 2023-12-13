import "../../Style/VendorInfo.css";

import user from "../../images/user.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import lastname from "../../images/lastname.svg";
import company from "../../images/company.svg";
import back from "../../images/back.svg";
import pass from "../../images/password.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const VendorInfo = () => {
    const [vendorInfo, setVendorInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        companyName: '',
        password: '',
      });
      useEffect(() => {
        
        const emailFromSession = sessionStorage.getItem('email');
        const passwordFromSession = sessionStorage.getItem('password');
        if (emailFromSession) {
         
          axios.get(`http://localhost:8000/vendors/vendorLogin/${emailFromSession}/${passwordFromSession}`)
            .then((response) => {
              const vendorData = response.data;
              setVendorInfo({
                firstName: vendorData.firstName,
                lastName: vendorData.lastName,
                phone: vendorData.phone,
                email: vendorData.email,
                companyName: vendorData.companyName,
                password: vendorData.password,
              });
            })
            .catch((error) => {
              console.error('Error fetching vendor information:', error);
            });
        }
      }, []);
    
      const handleUpdate = () => {
       
        axios.put(`http://localhost:8000/category/getAllCategories${vendorInfo.email}`, vendorInfo)
          .then((response) => {
            console.log('Vendor information updated:', response.data);
            
          })
          .catch((error) => {
            console.error('Error updating vendor information:', error);
          });
      };
    
      const handleDelete = () => {
       
        axios.delete(`http://localhost:8000/category/getAllCategories${vendorInfo.email}`)
          .then((response) => {
            console.log('Vendor deleted:', response.data);
            sessionStorage.removeItem('email');
          })
          .catch((error) => {
            console.error('Error deleting vendor:', error);
          });
      };
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setVendorInfo({ ...vendorInfo, [id]: value });
      };

  return (
    <div className="vendor-info">
      <div className="back">
        <Link to="/">
          <img src={back} className="back-img" />
        </Link>
      </div>
      <div className="vendor-info1">
        <p className="vendortitle"> Vendor Informartion</p>
        <div className="vendor-user">
          <img src={user} className="login-img" />

           <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="login-input"
            value={vendorInfo.name}
            onChange={handleChange}
             />
        </div>
        <div className="user1">
          <img src={lastname} className="login-img" />

          <div className=" text">
            <input
              type="text"
              id="username"
              placeholder="Last Name"
              className="login-input"
              value={vendorInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user1">
          <img src={phone} className="login-img" />

          <div className=" text">
            <input
              type="text"
              id="username"
              placeholder="Phone"
              className="login-input"
              value={vendorInfo.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user1">
          <img src={email} className="login-img" />

          <div className=" text">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="login-input"
              value={vendorInfo.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="user1">
          <img src={company} className="login-img" />

          <div className=" text">
            <input
              type="text"
              id="username"
              placeholder="Company-name"
              className="login-input"
              value={vendorInfo.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="user1">
          <img src={pass} className="login-img" />

          <div className=" text">
            <input
              type="text"
              id="username"
              placeholder="Password"
              className="login-input"
              value={vendorInfo.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="button-containor">
        <button type="button" className="submitbt" onClick={handleUpdate}>
          Update Info
        </button>
        <button type="button" className="btn-delete1" onClick={handleDelete}>
          Delete Info
        </button>
        </div>
    </div>
  );
};
export default VendorInfo;
