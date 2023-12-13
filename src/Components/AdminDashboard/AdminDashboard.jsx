import '../../Style/Dashboard.css';
import { useState } from "react";
import AdminVendors from './AdminVendors';
import AdminAddVendor from './AdminAddVendor';
import AdminProduct from './AdminProduct';
import AdminCategories from './AdminCategories';
import AdminInfo from './AdminAddVendor';
import AdminAddProducts from './AdminAddProducts';

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
          case "adminProduct":
            setActiveSection("adminProduct");
            break;
          case "addVendor":
            setActiveSection("addVendor");
            break;
          case "categories":
            setActiveSection("categories");
            break;
          default:
            setActiveSection(null);
        }
      };
  return (
    <div className="dashboard-container">
    <div className="side-menu">
        <p className='dash-title'> Dashboard </p>
        <ul className='dash-menu-ul'>
          <li className='dash-menu-li'onClick={() => handleClick("displayProduct")}>See Vendors On The Website</li>
          <li className='dash-menu-li' onClick={() => handleClick("addProduct")}>Add Product</li>
          <li className='dash-menu-li' onClick={() => handleClick("adminProduct")}>Products On Website</li>
          <li className='dash-menu-li'onClick={() => handleClick("addVendor")}>Add Vendor To The Website</li>
          <li className='dash-menu-li'onClick={() => handleClick("categories")}>Categories </li>
        </ul>
      </div>
          <hr/>
      <div className='dash-content'>
      <div id="displayProduct" style={{ display: activeSection === "displayProduct" ? "block" : "none" }}>
      <AdminVendors/>
      </div>
      <div id="addProduct" style={{ display: activeSection === "addProduct" ? "block" : "none" }}>
      <AdminAddProducts/>
      </div>
      <div id="adminProduct" style={{ display: activeSection === "adminProduct" ? "block" : "none" }}>
     <AdminProduct/>
      </div>
      <div id="addVendor" style={{ display: activeSection === "addVendor" ? "block" : "none" }}>
      <AdminAddVendor/>
      </div>
      <div id="categories" style={{ display: activeSection === "categories" ? "block" : "none" }}>
      <AdminCategories/>
      </div>
    </div>
      </div>
  )
}

export default AdminDashboard
