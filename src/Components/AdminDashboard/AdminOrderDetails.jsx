import "../../Style/AdminInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";

const AdminOrderDetails = () => {
  const [data, setData] = useState([]);
  const fetchOrderDetails = () => {
    const apiUrl = "http://localhost:8000/orderDetail/getAllOrders";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/orderDetail/deleteorderDetailById/${id}`)
      .then((response) => {
        
        fetchOrderDetails(); // Refresh the cient list after deletion
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);
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
          {data.map((order) => (
           <tr key={order._id}>
              <td>{order.email} </td>
              <td>{order.producsId} </td>
              <td>{order.date} </td>
              <td>{order.totalPrice} </td>
              <td>{order.status} </td>
        
              <td>
                <div className="button-containor">
                <button type="button" className="submitbt">
                  Update Order
                </button>
                <button type="button"
                 className="productbtn-delete"
                 onClick={() => handleDelete(order._id)}
                 >
                Delete Order
                </button>
              </div>
              </td>
            </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AdminOrderDetails;