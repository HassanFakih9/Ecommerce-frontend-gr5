import "../Style/ProductComponent2.css";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowup from "../images/arrowup.svg";
import arrowdown from "../images/arrowdown.svg";

const ProductDetails = ({ id, image, name, vendor, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {});
  const handledecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleincrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  const addToCart = async () => {
    try {
      await axios.post("http://localhost:8000/orderedItem/addOrderedItem", {
        productName: name,
        price: price,
        quantity: quantity,
        userEmail:localStorage.getItem('userEmail')
      });
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(name);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <div className="productcomp-title" key={id}>
      <div className="product">
        <h1 className="productcomp-name"> {name}</h1>
        <img src={image} className="product-hppavillon" />
      </div>
      <div className="productdetail">
        <h1 className="productcomp-name"> Products Details</h1>
        <div className="product-model">
          {" "}
          <p className="product-bold"> By :</p> {vendor}{" "}
        </div>
        <p className="product-model">
          {" "}
          <p className="product-bold">Description:</p> {description}
        </p>
        <p className="product-price">
          {" "}
          <p className="product-bold">Price: </p> {price} $
        </p>
        <div className="product-quantity1">
          <div className="product-quantity">
            <img
              src={arrowup}
              onClick={handleincrement}
              className="product-arrowup"
            />
            <div className="product-span">
              <span className="quantity"> {quantity} </span>
            </div>
            <img
              src={arrowdown}
              onClick={handledecrement}
              className="product-arrowdown"
            />
          </div>
          <button type="button" className="productbtn-add" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="confirmation-modal">
        <div className="cond">Item Added To Cart</div>
        <div className="Okbutton">
          <button className="OkOrder"> OK</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
