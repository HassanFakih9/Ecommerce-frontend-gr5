import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import PoductsPage from "./Components/PoductsPage"
import OrderPage from "./Components/OrderPage";
import ProductComponent2 from "./Components/ProductComponent2";
import ProductDetails from "./Components/ProductsDetails";
import VendorLogin from "./Components/VendorDashboard/VendorLogin";
import AdminLogin from "./Components/AdminDashboard/AdminLogin";
import VendorDashboard from "./Components/VendorDashboard/VendorDashboard";
import VendorInfo from "./Components/VendorDashboard/VendorInfo";
import VendorOrder from "./Components/VendorDashboard/VendorOrder";
import AdminInfo from "./Components/AdminDashboard/AdminInfo";
import AdminOrder from "./Components/AdminDashboard/AdminOrder";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductsPage" element={<PoductsPage />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/ProductComponent2" element={<ProductComponent2 />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/ProductComponent2/:id" element={<ProductComponent2 />} />
          <Route path="/Vendor" element={<VendorLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/vendorDash" element={<VendorDashboard />} />
          <Route path="/vendorInfo" element={<VendorInfo />} />
          <Route path="/vendorOrder" element={<VendorOrder />} />
          <Route path="/adminInfo" element={<AdminInfo />} />
          <Route path="/adminOrder" element={<AdminOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
