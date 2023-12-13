import "../../Style/AdminInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
const AdminVendors = () => {
  const [data, setData] = useState([]);

  const fetchVendors = () => {
    const apiUrl = "http://localhost:8000/vendors/getAllVendors";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchVendors();
  }, []);
  return (
    <div className="AdminVendors">
      <div className="Admin-table">
        <p className="order-title"> Vendors</p>

        <table>
          <tr>
            <td>Name</td>
            <td>Last-Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Company</td>
            <td>Password</td>
            <td>Actions</td>
          </tr>
          {data.map((vendor) => (
            <tr>
              <td> {vendor.name}</td>
              <td> {vendor.lastName}</td>
              <td> {vendor.email}</td>
              <td> {vendor.phone}</td>
              <td> {vendor.company}</td>
              <td> {vendor.password}</td>
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
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminVendors;