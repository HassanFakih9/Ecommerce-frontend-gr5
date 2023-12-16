import '../../Style/Dashboard.css';
import VendorDisplayProduct from './VendorDisplayProduct';
import VendorAddProducts from './VendorAddProducts';
import VendorOrder from './VendorOrder';
import back from "../../images/back.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import VendorInfo from './VendorInfo';
const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const handleClick = (section) => {
    switch (section) {
      case "addProduct":
        setActiveSection("addProduct");
        break;
      case "displayProduct":
        setActiveSection("displayProduct");
        break;
      case "vendorInfo":
        setActiveSection("vendorInfo");
        break;
      case "vendorOrder":
        setActiveSection("vendorOrder");
        break;
      default:
        setActiveSection(null);
    }
  };
  return (<div>
    <div className="back">

      <Link to="/"><img src={back} className="back-img" /></Link>

    </div>
    <div className="product">
      <p className='order-title'>
        Product List
      </p>
      <div className="enter-product">
        <input type='text' className='vendorlogin-input' placeholder='Product Name' />
        <button className='userLogin-btn'> Search </button>
      </div>

      <div className="table1">
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Vendor Name</th>
            <th>Image</th>
            <th> Action </th>



          </tr>
          <tr>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> </td>
            <td>
              <div className="button-containor">
                <button type="button" className="submitbt">
                  Update Product
                </button>


                <button type="button" className="productbtn-delete">
                  Delete Product
                </button>
              </div>
            </td>


          </tr>

        </table>
      </div>

    </div>
    </div>
    )
}

    export default VendorDashboard
