import React, { useState } from 'react';
import '../Style/MenuBar.css';
import logo from '../images/logo.jpg';
import useradd from '../images/user-add.svg';
import menu from '../images/menu.svg'
import shoppingCart from '../images/shopping-cart.svg';
import { Link } from 'react-router-dom';


const MenuBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!showMenu)
  }

  return (
    <div className="MenuBar">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logoImage" alt="logo" />
          <p className="logoTitle"> E-lectronics</p>
        </div>
      </Link>
      <div className='responsive-bar'>
        <div className='burger-menu'>
        <img src={menu} className='menuimg' onClick={handleMenu} />
        </div>
        {showMenu &&
          <div className="menuBar">
            <ul className="menu-ul">
              <li className="menu-li">
                {' '}
                <Link to="/">Home </Link>
              </li>
              <li className="menu-li">
                {' '}
                <Link to="/ProductsPage"> Products</Link>
              </li>
              <li className="menu-li">
                <Link to="/Contact"> Contact </Link>
              </li>
            </ul>
          </div>}
      </div>
      <div className='navbar'>
        <div className="menuBar">
          <ul className="menu-ul">
            <li className="menu-li">
              {' '}
              <Link to="/">Home </Link>
            </li>
            <li className="menu-li">
              {' '}
              <Link to="/ProductsPage"> Products</Link>
            </li>
            <li className="menu-li">
              <Link to="/Contact"> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="loginBtn">
        <Link to="/Signup">
          <img src={useradd} className="logoImage1" alt="add user" />
        </Link>
        <Link to="/OrderPage">
        <img
          src={shoppingCart}
          className="logoImage"
          alt="shopping cart"
        />
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
