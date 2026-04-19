import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/a-user/landing";
import ScrollToTop from "./assets/toScrollTop";
import AuthPage from "./pages/authPage";
import About from "./pages/a-user/about";
import Shop from "./pages/a-user/shop";
import Cart from "./pages/a-user/cart";
import Dashboard from "./pages/admin/dashboard";
import AddProduct from "./pages/admin/addproduct";
import Inventory from "./pages/admin/inventory";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="login" element={<AuthPage />} />
        {/* User */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        {/* Admin */}
        {/* dito yung admin routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;
