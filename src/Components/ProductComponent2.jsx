import '../Style/ProductComponent2.css'
import MenuBar from './MenuBar';
import Footer from './Footer';
import image from '../images/laptop.jpeg'
import hppavillon from '../images/HPpavillonDV6.jpg'
import laptop1 from '../images/laptop1.jpeg'
import laptop2 from '../images/laptop2.jpg'
import laptop3 from '../images/laptop3.png'
const ProductComponent2 = () => {
    return (
        <div>

            <MenuBar />
            <div className='productcomp-title'>
                <div className='product'>
                    <h1 className='productcomp-name'> HP Pavillon DV6</h1>
                    <img src={hppavillon} />
                </div>

                <div className='productdetail'>
                <h1 className='productcomp-name'> SPECS</h1>
                    <p>  Brand : HP <br />Screen 14" Touch Screen <br />Color: Silver <br />CPU :  3GHz Intel Celeron<br /> RAM 4GB Memory <br />HDD :1TB <br />
                        Webcam <br /> Bluetooth<br />      Wifi 802.11 <br />     Windows 10 </p>
                        <p className='product-model'> Model:14-dq0052dx   SKU:6499749</p>
                        <p className='product-price'>$299.3</p>
                        <button type="button" className="productbtn-quantity">
                        Quantity 
                    </button>
                    <button type="button" className="productbtn-add">
                        Add to Chart 
                    </button>
                </div>
            </div>
            <div className='product-similar'>
            <h1 className='productcomp-name'> Similar Products</h1>
            <div className='product-laptop'> 
            <div >
            <img src={laptop1} />
            <p className='product-laptop'>HP 17 Newest Laptop, 17.3" FHD IPS </p>
            </div>
            <div>
            <img src={laptop2} />
            <p className='product-laptop'>HP 17.3" HD+ Premium Laptop: AMD </p>
            </div>
            <div>
            <img src={laptop3} />
            <p className='product-laptop'>HP EliteBook 840 14”G10 NoteBook</p>
            </div>
            </div>
            </div>







            <Footer />
        </div>
    )
}

export default ProductComponent2
