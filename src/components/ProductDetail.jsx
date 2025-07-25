import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const [Cart, setCart] = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      toast.success("Added to Cart");
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div
      className={`min-h-screen mt-14 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div
          className={`w-full flex justify-center items-center p-6 fade-in-up ${
            darkMode ? "bg-gray-800" : "bg-neutral-100"
          }`}
        >
          <img
            src={`${product.image}`}
            alt={product.name}
            className="object-cover max-h-[500px] w-auto transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 text-sm uppercase tracking-wide font-medium fade-in-up delay-200">
          <h2
            className={`text-2xl font-bold uppercase ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {product.name}
          </h2>

          <p
            className={`text-lg font-semibold ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            ₹ {product.price}
          </p>

          {/* Animated Dropdowns on Hover */}
          <div className="flex flex-col gap-4">
            <HoverDropdown title="Details">
              <p>{product.detail}</p>
            </HoverDropdown>

            <HoverDropdown title="Size Guide">
              <p>
                Refer to our size guide for perfect fit. Sizes run true to
                standard.
              </p>
            </HoverDropdown>

            <HoverDropdown title="Size (FIT)">
              <p>
                Available in {product.availableSizes.join(", ")}. Regular fit
                for comfort and flexibility.
              </p>
            </HoverDropdown>

            <HoverDropdown title="Description">
              <p>{product.description}</p>
            </HoverDropdown>

            <HoverDropdown title="Delivery / Returns">
              <p>
                Free delivery in 3–5 business days. Easy 7-day returns if unworn
                and tags intact.
              </p>
            </HoverDropdown>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-6">
            <button
              className={`py-3 font-semibold tracking-wide uppercase transition ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-black text-white hover:opacity-90"
              }`}
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className={`py-3 font-semibold tracking-wide uppercase transition ${
                darkMode
                  ? "border border-gray-700 text-white hover:bg-gray-800"
                  : "border border-black text-black hover:bg-neutral-100"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Size Guide */}
        <div className="w-full">
          <h1
            className={`text-4xl font-bold py-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Size Guide
          </h1>
          {product.type === "bottom" ? (
            <img src="/pents size.png" className="w" alt="Pants Size Guide" />
          ) : (
            <img src="/shirt size.png" className="w" alt="Shirt Size Guide" />
          )}
        </div>
      </section>
    </div>
  );
};

// Dropdown opens on hover
const HoverDropdown = ({ title, children }) => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext

  return (
    <div className="relative group">
      <div
        className={`cursor-pointer flex justify-between items-center font-medium border-b pb-2 uppercase transition-colors ${
          darkMode
            ? "text-white border-gray-700"
            : "text-black border-neutral-300"
        }`}
      >
        {title}
        <i
          className={`ri-arrow-down-s-line text-lg transition-transform duration-300 group-hover:rotate-180 ${
            darkMode ? "text-gray-400" : "text-black"
          }`}
        />
      </div>
      <div
        className={`max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 mt-2 ${
          darkMode ? "text-gray-400" : "text-neutral-600"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProductDetail;
