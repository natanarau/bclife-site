import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductDetails from "../Components/ProductDetails";
import SocialNetwork from "../Components/SocialNetwork";
import Erro404 from "../pages/404";
import Home from "../pages/home";
import Products from "../pages/produtos";

export const RouterApp = () => {
  return (
    <Router basename="/">
      <Header />
      <SocialNetwork />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/:url" element={<ProductDetails />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}
