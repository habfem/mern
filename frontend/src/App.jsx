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
  //const user = true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    /*  <Router>
       <Routes>
         <Route path="/pay" element={<Pay />} />
         <Route path="/success" element={<Success />} />
       </Routes>
     </Router> */
  );
}

export default App;
