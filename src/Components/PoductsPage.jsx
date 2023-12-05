import React from 'react'
import MenuBar from "./MenuBar";
import Footer from './Footer';
import '../Style/ProductsPage.css';
const PoductsPage = () => {
  return (
    <div className='PoductsPage'>
      <MenuBar/>
      <div className='selectBar'>
        <select className='selectCategory' id='selectCategory'>

        </select>
        <input type='text' className='inputProduct' placeholder='Search Product'/>
      </div>
      <Footer/>
    </div>
  )
}

export default PoductsPage
