import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import PoductsPage from "./Components/PoductsPage"
import OrderPage from "./Components/OrderPage";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
