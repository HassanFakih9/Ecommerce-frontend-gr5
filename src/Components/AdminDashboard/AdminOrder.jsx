import "../../Style/AdminInfo.css";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";

const AdminOrder = () => {
    return (
        <div className="adminorder">
            <div className="back">

                <Link to="/"><img src={back} className="back-img" /></Link>

            </div>
            <div className="samer">

                <div className="Admin-table">
                    <p className="order-title"> Vendors</p>
                    <div className="table1">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Last-Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Company</th>




                            </tr>
                            <tr>

                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>


                            </tr>

                        </table>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default AdminOrder;