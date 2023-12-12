import "../../Style/VendorInfo.css";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";
import image1 from "../../images/HPpavillonDV6.jpg";


const AdminProduct = () => {
    return (
        <div>
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
                            <th>Categorie</th>
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









        </div>);
};

export default AdminProduct