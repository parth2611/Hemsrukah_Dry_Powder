import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center pt-24 bg-brand-50">
              <div className="text-center px-5">
                <span className="text-9xl block mb-6">🌿</span>
                <h1 className="font-display text-5xl font-bold text-brand-900 mb-4">
                  Page Not Found
                </h1>
                <p className="text-xl text-gray-500 mb-8">
                  The page you're looking for doesn't exist.
                </p>
                <a href="/" className="btn-primary text-lg px-10 py-4">
                  Return Home
                </a>
              </div>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
