import '../Style/ProductComponent2.css'
import { useEffect, useState } from 'react';
import hppavillon from '../images/HPpavillonDV6.jpg'
import arrowup from '../images/arrowup.svg'
import arrowdown from '../images/arrowdown.svg'
const ProductDetails = ({image ,name ,vendor , description, price}) => {
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {

    },);
    const handledecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleincrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
        }
    }
    return (
    
              <div className='productcomp-title'>
                <div className='product'>
                    <h1 className='productcomp-name'> {name}</h1>
                    <img src={image} className='product-hppavillon' />
                </div>
                <div className='productdetail'>
                    <h1 className='productcomp-name'> Products Details</h1>
                    <div className='product-model'> <p className='product-bold'> By :</p>  {vendor} </div>
                    <p className='product-model'> <p className='product-bold'>Description:</p> {description}</p>
                    <p className='product-price'> <p className='product-bold'>Price: </p> {price} $</p>
                    <div className='product-quantity1'>
                        <div className='product-quantity'>
                            <img src={arrowup} onClick={handleincrement} className='product-arrowup' />
                            <div className='product-span'>
                                <span className='quantity'> {quantity}  </span>
                            </div>
                            <img src={arrowdown} onClick={handledecrement} className='product-arrowdown' />
                        </div>
                        <button type="button" className="productbtn-add">
                            Add to Chart
                        </button>
                    </div>

                </div>
            </div>
        )
    }
    
    export default ProductDetails
    