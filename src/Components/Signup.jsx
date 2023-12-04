import '../Style/Signup.css';
import signup from '../images/signup .jpg';
import close from '../images/close.svg'
import user from '../images/user.svg'
import lastname from '../images/lastname.svg'
import password from '../images/password.svg'
import confpassword from '../images/confirm-password-com.svg'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import address from '../images/location.svg'
const Signup = () => {
    return (

        <div className='signup'>

            <div className="signup-div">
                <img src={signup} className="signup-image" />
                <p>
                    {" "}
                    We always make our customer
                    <br />happy by providing as many choises
                    <br />as possible.
                </p>
            </div>

            <div className="part1">
                <div className="part2">
                    <div className="close">
                        <img src={close} className="close-img" />
                    </div>
                    <p className="signup-title">
                        Sign Up
                    </p>

                    <div className="user1">

                        <img src={user} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="username" className="login-input" />
                        </div>
                    </div>
                    <div className="user1">

                        <img src={lastname} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Lastname" className="login-input" />
                        </div>
                    </div>
                    <div className="user1">

                        <img src={email} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Email" className="login-input" />
                        </div>
                    </div>
                    <div className="user1">

                        <img src={password} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Password" className="login-input" />
                        </div>
                    </div>

                    <div className="user1">

                        <img src={confpassword} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Confirm Password" className="login-input" />
                        </div>
                    </div>
                    <div className="user1">

                        <img src={phone} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Phone" className="login-input" />
                        </div>
                    </div>
                    <div className="user1">

                        <img src={address} className="login-img" />

                        <div className=" text">
                            <input type="text" id="username" placeholder="Adderss" className="login-input" />
                        </div>
                    </div>
                    <button type="button" className="loginbt">
                        Create Account
                    </button>
                    <p> Already have an account? Sign in</p>

                </div>


            </div>
        </div>
    )
};

export default Signup;
