import '../Style/Signup.css';
import signup from '../images/signup .jpg';
import back from '../images/back.svg'
import user from '../images/user.svg'
import lastname from '../images/lastname.svg'
import password from '../images/password.svg'
import confpassword from '../images/confirm-password-com.svg'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import address from '../images/location.svg'
import {Link } from "react-router-dom";
const Signup = () => {
    return (

        <div className='signup'>

            <div className="signup-div">
                
                    <div className="back">
                        <Link to="/"><img src={back} className="back-img" /></Link>
                   
                </div>
                <div className="signup-div1">
                    <img src={signup} className="signup-image" />
                    <p>
                        {" "}
                        We always make our customer
                        <br />happy by providing as many choises as possible.
                    </p>
                </div>
            </div>
            <div className='signup-div2'>
            <div className='part'>
                <div className="part1">
                    <div className="part2">
                        <p className="signup-title">
                            Sign Up
                        </p>
                        <div className="user1">

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

                            <img src={password} className="login-img" />

                            <div className=" text">
                                <input type="text" id="username" placeholder="Password" className="login-input" />
                            </div>
                        </div>

                                              
                        
                        <div className='btn-signup'>
                            <button type="button" className="submitbt">
                                Create Account
                            </button>
                            <p> Already have an account? <Link to="/Login">Sign in </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Signup;
