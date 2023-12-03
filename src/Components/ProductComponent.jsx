import '../Style/ProductComponent.css'
import image from '../images/laptop.jpeg'
const ProductComponent = () => {
  return (
    <div>
      <div className='product'>
        <img src={image} className='image-product'/>
        <div className='product-information'>
            <div className='product-name'>
            Product Name 
            <br/>
            900$
            </div>
            <div className='add-to-cart'>
                Add To Cart
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
