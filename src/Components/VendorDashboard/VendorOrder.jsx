import "../../Style/VendorInfo.css";

const VendorOrder = () => {
    return (
        <div className="samer">
            <div className="vendor-table">
                <p className="order-title"> Vendor Order</p>
                <div className="table1">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Last-Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>City Name</th>
                            <th>Postal Code</th>
                            <th>Sreet Address</th>
                            <th>Total Price</th>


                        </tr>
                        <tr>

                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
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
    );
};

export default VendorOrder;
