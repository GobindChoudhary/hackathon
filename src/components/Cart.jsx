import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "./Navbar";

const Cart = () => {
  const [Cart, setCart] = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  const getNumericPrice = (price) =>
    parseFloat(price.replace("$", "").replace("₹", ""));

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDeleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const total = Cart.reduce(
    (acc, item) => acc + getNumericPrice(item.price) * item.quantity,
    0
  );

  return (
    <div
      className={`min-h-screen mt-14 font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <section className="w-full max-w-6xl mx-auto px-6 py-12 fade-in-up">
        <h2
          className={`text-2xl md:text-3xl font-bold uppercase mb-10 tracking-wide ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Your Cart
        </h2>

        {Cart.length === 0 ? (
          <div className="w-full flex flex-col items-center">
            <img src="/empty_cart.png" className="w-[50%]" alt="Empty Cart" />
            <h1
              className={`text-5xl font-bold ${
                darkMode ? "text-gray-400" : "text-black"
              }`}
            >
              Your cart is empty
            </h1>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {Cart.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-6 gap-4 opacity-0 animate-fade-in-up ${
                  darkMode
                    ? "border-gray-700 text-gray-300"
                    : "border-neutral-300 text-black"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Product Info */}
                <div className="flex items-center gap-6">
                  <img
                    src={`${item.image}`}
                    alt={item.name}
                    className="w-[120px] h-[150px] object-cover"
                  />
                  <div className="flex flex-col gap-1 uppercase text-sm">
                    <p
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-neutral-500"
                      }`}
                    >
                      Size: {item.size}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className={`w-6 h-6 text-sm font-bold border transition ${
                          darkMode
                            ? "border-gray-700 text-white hover:bg-gray-700"
                            : "border-black text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        -
                      </button>
                      <span
                        className={`text-base font-medium ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className={`w-6 h-6 text-sm font-bold border transition ${
                          darkMode
                            ? "border-gray-700 text-white hover:bg-gray-700"
                            : "border-black text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        +
                      </button>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className={`mt-3 w-fit px-2 py-1 text-xs font-medium rounded transition ${
                        darkMode
                          ? "bg-red-800 text-white hover:bg-red-700"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <p
                  className={`text-base font-semibold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  ₹{getNumericPrice(item.price) * item.quantity}.00
                </p>
              </div>
            ))}

            {/* Total & Actions */}
            <div
              className={`flex flex-col sm:flex-row justify-between items-center pt-10 border-t mt-6 slide-up ${
                darkMode ? "border-gray-700" : "border-neutral-300"
              }`}
            >
              <p
                className={`text-xl font-bold uppercase ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total: ₹{total}.00
              </p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link to="/ProductList">
                  <button
                    className={`px-6 py-3 uppercase text-sm font-medium border transition ${
                      darkMode
                        ? "border-gray-700 text-white hover:bg-gray-700"
                        : "border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Continue Shopping
                  </button>
                </Link>
                <button
                  className={`px-6 py-3 uppercase text-sm font-medium transition ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-black text-white hover:opacity-90"
                  }`}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
