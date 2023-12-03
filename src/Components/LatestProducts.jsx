import '../Style/LatesProducts.css'

import ProductComponent from './ProductComponent'
const LatestProducts = () => {
  return (
    <div className='latestProducts'>
         <div className="titleContainer">
        <p className="Title">Everything You Need Right Here</p>
      </div>
      <div className='product-display'>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      </div>
    </div>
  )
}

export default LatestProducts
