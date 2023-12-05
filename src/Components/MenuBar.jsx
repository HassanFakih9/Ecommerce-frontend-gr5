import '../Style/MenuBar.css'
import logo from '../images/logo.jpg'
import useradd from'../images/user-add.svg'
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className='MenuBar'>
      <Link to="/HomePage"> <div className='logo'>
        <img src={logo} className='logoImage' alt='logo'/>
        <p className='logoTitle'> E-lecrtonics</p>
      </div>
      </Link>
      <div className='menuBar'>
        <ul className="menu-ul">
            <li className='menu-li'> <Link to="/HomePage">Home </Link></li>
            <li className='menu-li'> <Link to="/ProductsPage"> Products</Link></li>
            <li className='menu-li'><Link to="/Contact"> Contact </Link></li>
        </ul>
      </div>
      <div className='loginBtn'>
      <Link to="/Signup"><img src={useradd} className='logoImage' alt='add user'/></Link>
      </div>
    </div>
  )
}

export default MenuBar
