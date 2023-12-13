import "../../Style/AdminInfo.css";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";

const AdminCategories = () => {
    return (
        <div>
            <div className="back">

                <Link to="/"><img src={back} className="back-img" /></Link>

            </div>
            <div className="product">
                <p className='order-title'>
                    Categories
                </p>
                <div className="enter-product">
                    <input type='text' className='vendorlogin-input' placeholder=' Add Gategory' />
                    <button className='userLogin-btn'> Add Category </button>
                </div>

                <div className="table1">
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                        <tr>

                            <td> </td>
                            <td> <button type="button" className="submitbt">
                                Update
                            </button></td>
                            <td> <button type="button" className="productbtn-delete">
                                Delete
                            </button> </td>


                        </tr>
                    </table>
                </div>
            </div>
        </div>);
};

export default AdminCategories;
