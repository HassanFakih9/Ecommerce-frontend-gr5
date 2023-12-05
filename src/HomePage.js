import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import CustomerReview from "./Components/CustomerReview";
import Footer from "./Components/Footer";
import LatestProducts from "./Components/LatestProducts";
function HomePage() {
  return (
    <div className="HomePage">
     <Header/>
     <AboutUs/>
     <Banner/>
     <LatestProducts/>
     <CustomerReview/>
     <Footer/> 
    </div>
  );
}

export default HomePage;
