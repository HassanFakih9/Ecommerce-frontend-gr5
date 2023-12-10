import '../../Style/Dashboard.css';
import VendorDisplayProduct from './VendorDisplayProduct';
import VendorAddProducts from './VendorAddProducts';
import { useState } from "react";
import VendorInfo from './VendorInfo';
const VendorDashboard = () => {
    const [activeSection, setActiveSection] = useState(null);
    const handleClick = (section) => {
        switch(section) {
          case "addProduct":
            setActiveSection("addProduct");
            break;
          case "displayProduct":
            setActiveSection("displayProduct");
            break;
            case "vendorInfo":
              setActiveSection("vendorInfo");
              break;
          default:
            setActiveSection(null);
        }
      };
  return (
    <div className="dashboard-container">
    <div className="side-menu">
        <p className='dash-title'> Dashboard</p>
        <ul className='dash-menu-ul'>
          <li className='dash-menu-li' onClick={() => handleClick("addProduct")}>Add Product</li>
          <li className='dash-menu-li'onClick={() => handleClick("displayProduct")}>Display Products</li>
          <li className='dash-menu-li'onClick={() => handleClick("vendorInfo")}>Your Personal Information</li>
        </ul>
      </div>
          <hr/>
      <div className='dash-content'>
      <div id="displayProduct" style={{ display: activeSection === "displayProduct" ? "block" : "none" }}>
        <VendorDisplayProduct />
      </div>
      <div id="addProduct" style={{ display: activeSection === "addProduct" ? "block" : "none" }}>
        <VendorAddProducts />
      </div>
      <div id="vendorInfo" style={{ display: activeSection === "vendorInfo" ? "block" : "none" }}>
        <VendorInfo />
      </div>
    </div>
      </div>
  )
}

export default VendorDashboard
