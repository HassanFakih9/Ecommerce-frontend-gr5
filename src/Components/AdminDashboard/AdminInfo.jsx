import "../../Style/AdminInfo.css";

import user from "../../images/user.svg";
import email from "../../images/email.svg";
import phone from "../../images/phone.svg";
import lastname from "../../images/lastname.svg";
import company from "../../images/company.svg";
import back from "../../images/back.svg";
import { Link } from "react-router-dom";


const AdminInfo = () => {
    return (

        <div className="admin-info">
         
            <div className="back">

                <Link to="/"><img src={back} className="back-img" /></Link>

            </div>
            <div className="admin-info1">
                <p className="admintitle">  Add Vendor </p>
                <div className="admin-user">

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
                    Add Vendor
                </button>


                
            </div>
            
        </div>


    );
};
export default AdminInfo;
