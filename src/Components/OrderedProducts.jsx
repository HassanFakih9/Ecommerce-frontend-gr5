import "../Style/OrderPage.css";
import bin from "../images/bin.svg";

const OrderedProducts = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="orderedProductIndo">
          <p className="orderProductName">{product.productName}</p>
          <p className="orderProductName">{product.price} $</p>
          <p className="orderProductName">{product.quantity}</p>
          <p className="orderProductName">{product.price * product.quantity}</p>
          <img src={bin} className="bin" alt={`Remove ${product.productName}`} />
        </div>
      ))}
    </div>
  );
};

export default OrderedProducts;
