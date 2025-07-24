import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const [Cart, setCart] = useContext(CartContext);
  const { id } = useParams();
  console.log(products);
  const product = products.find((p) => p.id === Number(id));
  console.log(product.image);

  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;

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
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="w-full bg-neutral-100 flex justify-center items-center p-6 rounded">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="object-cover max-h-[500px] w-auto"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 text-sm text-neutral-700 uppercase tracking-wide font-medium">
          <h2 className="text-2xl font-bold uppercase text-black">
            {product.name}
          </h2>

          <p className="text-lg font-semibold text-black">₹ {product.price}</p>

          {/* Dropdown Sections */}
          <div className="flex flex-col gap-4">
            <Dropdown title="Details">
              <p>
                This is a high-quality product made from premium materials.
                Ideal for casual and formal occasions.
              </p>
            </Dropdown>

            <Dropdown title="Size Guide">
              <p>
                Refer to our size guide for perfect fit. Sizes run true to
                standard.
              </p>
            </Dropdown>

            <Dropdown title="Size (FIT)">
              <p>
                Available in S, M, L, XL. Regular fit for comfort and
                flexibility.
              </p>
            </Dropdown>

            <Dropdown title="Description">
              <p>
                {product.name} is crafted for those who value both style and
                substance. Durable, breathable, and designed for all-day wear.
              </p>
            </Dropdown>

            <Dropdown title="Delivery / Returns">
              <p>
                Free delivery in 3-5 business days. Easy 7-day returns if unworn
                and tags intact.
              </p>
            </Dropdown>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-6">
            <button className="bg-black text-white py-3 rounded hover:opacity-90 font-semibold tracking-wide uppercase transition">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="border border-black py-3 rounded font-semibold tracking-wide uppercase hover:bg-neutral-100 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Dropdown Reusable Component
const Dropdown = ({ title, children }) => (
  <details className="border-b border-neutral-300 pb-2 group open:pb-4">
    <summary className="cursor-pointer flex justify-between items-center font-medium text-black">
      {title}
      <i className="ri-arrow-down-s-line text-lg group-open:rotate-180 transition-transform" />
    </summary>
    <div className="mt-2 text-neutral-600 normal-case">{children}</div>
  </details>
);

export default ProductDetail;
