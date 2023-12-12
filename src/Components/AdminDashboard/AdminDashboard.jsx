import '../../Style/Dashboard.css';
import { useState } from "react";

import AdminVendors from './AdminVendors';
import AdminAddVendor from './AdminAddVendor';

const AdminDashboard = () => {
 
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
              case "addVendor":
                setActiveSection("addVendor");
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
          <li className='dash-menu-li'onClick={() => handleClick("displayProduct")}>See Vendors On The Website</li>
          <li className='dash-menu-li' onClick={() => handleClick("addProduct")}>Add Product</li>
          <li className='dash-menu-li'onClick={() => handleClick("addVendor")}>Add Vendor To The Website</li>
        </ul>
      </div>
          <hr/>
      <div className='dash-content'>
      <div id="displayProduct" style={{ display: activeSection === "displayProduct" ? "block" : "none" }}>
      <AdminVendors/>
      </div>
      <div id="addProduct" style={{ display: activeSection === "addProduct" ? "block" : "none" }}>
     
      </div>
      <div id="addVendor" style={{ display: activeSection === "addVendor" ? "block" : "none" }}>
      <AdminAddVendor/>
      </div>
    </div>
      </div>
  )
}

export default AdminDashboard
