import "../../Style/VendorInfo.css";

import user from "../../images/user.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import lastname from "../../images/lastname.svg";
import company from "../../images/company.svg";
import back from "../../images/back.svg";
import pass from "../../images/password.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VendorInfo = () => {
  const [vendorData, setVendorData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  const email = localStorage.getItem("email");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/vendors/getVendorByEmail/${email}`
        );
        const fetchedVendor = response.data[0]; // Assuming the API response returns an array

        if (fetchedVendor) {
          setVendorData({
            name: fetchedVendor.name || "",
            lastName: fetchedVendor.lastName || "",
            email: fetchedVendor.email || "",
            phone: fetchedVendor.phone || "",
            company: fetchedVendor.company || "",
            password: fetchedVendor.password || "",
          });
        }
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setVendorData({
      ...vendorData,
      [id]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://localhost:8000/vendors/updateVendorByEmail/${email}`,
        vendorData
      )
      .then((response) => {
        console.log("Vendor information updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating vendor information:", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/vendors/deleteVendor/${email}`)
      .then((response) => {
        console.log("Vendor deleted:", response.data);
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.error("Error deleting vendor:", error);
      });
  };
  return (
    <div className="vendor-info">
      <div className="vendor-info1">
        <p className="vendortitle">Vendor Information</p>

        <div className="vendor-user">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="login-input"
            value={vendorData.name}
            onChange={handleChange}
          />
        </div>

        <div className="user1">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="login-input"
            value={vendorData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="user1">
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            className="login-input"
            value={vendorData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="user1">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="login-input"
            value={vendorData.email}
            onChange={handleChange}
          />
        </div>

        <div className="user1">
          <input
            type="text"
            id="companyName"
            placeholder="Company-name"
            className="login-input"
            value={vendorData.company}
            onChange={handleChange}
          />
        </div>

        <div className="user1">
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="login-input"
            value={vendorData.password}
            onChange={handleChange}
          />
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