import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  // Convert price string to number, e.g. "$139.00" → 139
  const getNumericPrice = (price) => parseFloat(price.replace("$", ""));

  const total = cart.reduce(
    (acc, item) => acc + getNumericPrice(item.price) * item.quantity,
    0
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold uppercase mb-10">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-neutral-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-300 pb-6 gap-4"
            >
              <div className="flex items-center gap-6">
                <img
                  src={`/${item.image}`} // Ensure path starts with `/`
                  alt={item.name}
                  className="w-[120px] h-[150px] object-cover bg-neutral-100"
                />
                <div className="flex flex-col gap-1 uppercase text-sm">
                  <p className="font-medium text-black">{item.name}</p>
                  <p className="text-neutral-500">Size: {item.size}</p>
                  <p className="text-neutral-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="text-base font-semibold text-black">
                ${getNumericPrice(item.price) * item.quantity}.00
              </p>
            </div>
          ))}

          {/* Total & Actions */}
          <div className="flex justify-between items-center pt-10 border-t border-neutral-300 mt-6">
            <p className="text-xl font-bold uppercase">Total: ${total}.00</p>
            <div className="flex gap-4">
              <Link to="/ProductList">
                <button className="px-6 py-3 uppercase text-sm font-medium border border-black hover:bg-neutral-100">
                  Continue Shopping
                </button>
              </Link>
              <button className="px-6 py-3 bg-black text-white uppercase text-sm font-medium">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
  