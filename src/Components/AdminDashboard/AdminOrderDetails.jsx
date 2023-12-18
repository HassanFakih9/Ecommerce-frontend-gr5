import "../../Style/AdminInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";

const AdminOrderDetails = () => {
 
  return (
  
       
    <div className="AdminVendors">
        <div className="back">
          <Link to="/">
            <img src={back} className="back-img" />
          </Link>
        </div>
      <div className="Admin-table">
        <p className="order-title"> Order Details</p>

        <table className='tableDes'>
          <tr>
            
            <td>Email</td>
            <td>Product ID</td>
                         
           
            <td>Total Price</td>
            <td>Date</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
          
            <tr>
              <td> </td>
             
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
             
              
           
              <td><div className="button-containor">
                <button type="button" className="submitbt">
                  Update Order
                </button>


                <button type="button" className="productbtn-delete">
                  Cancel Order
                </button>
              </div>
              </td>
            </tr>
          
        </table>
      </div>
    </div>
  );
};

export default AdminOrderDetails;