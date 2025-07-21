import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  // Add to Cart Handler
  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
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
    <section className="w-full max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="w-full bg-neutral-100 flex justify-center items-center">
        <img
          src={`/${product.image}`}
          alt={product.name}
          className="object-cover max-h-[600px]"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6 text-sm text-neutral-700 uppercase tracking-wide font-medium">
        <h2 className="text-xl font-semibold uppercase text-black leading-tight">
          {product.name}
        </h2>
        <p className="text-base font-semibold text-black">{product.price}</p>

        {/* Options */}
        <div className="flex flex-col gap-4">
          <Dropdown title="Details" />
          <Dropdown title="Size Guide" />
          <Dropdown title="Size (FIT)" />
          <Dropdown title="Description" />
          <Dropdown title="Delivery / Returns" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <button className="bg-black text-white py-3 font-semibold tracking-wide uppercase">
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="border border-black py-3 font-semibold tracking-wide uppercase hover:bg-neutral-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

// Dropdown Component
const Dropdown = ({ title }) => (
  <details className="border-b border-neutral-300 pb-2">
    <summary className="cursor-pointer flex justify-between items-center">
      {title}
      <i className="ri-arrow-down-s-line text-lg" />
    </summary>
    <hr />
    <p>hello</p>
  </details>
);

export default ProductDetail;
