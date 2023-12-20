import "../Style/ProductComponent2.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import laptop1 from "../images/laptop1.jpeg";
import laptop2 from "../images/laptop2.jpg";
import laptop3 from "../images/laptop3.png";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductsDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductComponent2 = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchProductById(id);
  }, [id]);
  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/products/getProductById/${productId}`
      );
      setProduct(response.data[0]);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  return (
    <div>
      <MenuBar />

      {product ? (
        <ProductDetails
          image={product.image}
          name={product.name}
          vendor={product.vendorName}
          description={product.description}
          price={product.price}
        />
      ) : (
        <p>Loading...</p>
      )}
      {/* <div className="product-similar">
        <h1 className="productcomp-name"> Similar Products</h1>
        <div className="product-laptop">
          <div>
            <img src={laptop1} />
            <p className="product-laptop">
              HP 17 Newest Laptop, 17.3" FHD IPS{" "}
            </p>
          </div>
          <div>
            <img src={laptop2} />
            <p className="product-laptop">HP 17.3" HD+ Premium Laptop: AMD </p>
          </div>
          <div>
            <img src={laptop3} />
            <p className="product-laptop">HP EliteBook 840 14”G10 NoteBook</p>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default ProductComponent2;
