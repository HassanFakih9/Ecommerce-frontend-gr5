import "../../Style/VendorInfo.css";

import user from "../../images/user.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import lastname from "../../images/lastname.svg";
import company from "../../images/company.svg";


const VendorInfo = () => {
    return (
        <div className="vendor-info">
            <div className="vendor-info1">
                <p className="vendortitle"> Vendor Informartion</p>
                <div className="vendor-user">

                    <img src={user} className="login-img" />

                    <div className=" text">
                        <input type="text" id="username" placeholder="First Name" className="login-input" />
                    </div>
                </div>
                <div className="user1">

                    <img src={lastname} className="login-img" />

                    <div className=" text">
                        <input type="text" id="username" placeholder="Last Name" className="login-input" />
                    </div>
                </div>
                <div className="user1">

                    <img src={phone} className="login-img" />

                    <div className=" text">
                        <input type="text" id="username" placeholder="Phone" className="login-input" />
                    </div>
                </div>
                <div className="user1">

                    <img src={email} className="login-img" />

                    <div className=" text">
                        <input type="email" id="email" placeholder="Email" className="login-input" />
                    </div>
                </div>

                <div className="user1">

                    <img src={company} className="login-img" />

                    <div className=" text">
                        <input type="text" id="username" placeholder="Company-name" className="login-input" />
                    </div>
                </div>
            </div>
            <div className="button-containor">
                <button type="button" className="submitbt">
                    Update Info
                </button>


                <button type="button" className="btn-delete">
                    Delete Info
                </button>
            </div>
            <div className='btn-signup'>
            </div>
        </div>


    );
};
export default VendorInfo;