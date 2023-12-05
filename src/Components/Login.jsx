import "../Style/Login.css";
import login from "../images/login.png";
import user from "../images/user.svg";
import password from "../images/password.svg";
import close from "../images/close.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login-div">
        <img src={login} className="login-image" />
        <p>
          {" "}
          We always make our customer
          <br /> happy by providing as many choises
          <br /> as possible.
        </p>
      </div>
      <div className="part1">
        <div className="part2">
          <div className="close">
         
            <Link to="/"><img src={close} className="close-img" /></Link>
                
          </div>
          <p className="login-title">
            USER LOGIN 
          </p>
          <div className="user1">
            
              <img src={user} className="login-img" />
            
            <div className=" text">
              <input type="text" id="username" placeholder="Username" className="login-input" />
            </div>
          </div>
          <div className="user1">
           
              <img src={password} className="login-img"/>
          
            <div className="text"></div>
            <input type="password" id="username" placeholder="Password" className="login-input"/>
          </div>
          <button type="button" className="loginbt">
            Log In
          </button>
          <p> Not on E-lectronics ?<Link to="/Signup"> Sign Up </Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
