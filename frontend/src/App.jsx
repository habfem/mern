import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
//import Pay from "./pages/Pay";
//import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
