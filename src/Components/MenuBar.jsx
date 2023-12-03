import '../Style/MenuBar.css'
import logo from '../images/logo.jpg'
import useradd from'../images/user-add.svg'
const MenuBar = () => {
  return (
    <div className='MenuBar'>
      <div className='logo'>
        <img src={logo} className='logoImage' alt='logo'/>
        <p className='logoTitle'> E-lecrtonics</p>
      </div>
      <div className='menuBar'>
        <ul className="menu-ul">
            <li className='menu-li'>Home</li>
            <li className='menu-li'>Products</li>
            <li className='menu-li'>Contact</li>
        </ul>
      </div>
      <div className='loginBtn'>
      <img src={useradd} className='logoImage' alt='add user'/>
      </div>
    </div>
  )
}

export default MenuBar
