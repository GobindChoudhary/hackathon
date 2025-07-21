import { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "WAVE M LOGO HOODED WINDBREAKER [BLACK]",
      price: "$139.00",
      image: "public/product1.jpg",
      type: "top",
      material: "Nylon",
      color: "black",
      size: "M",
      season: "winter",
      fasteners: "zipper",
      collection: "24",
    },
    {
      id: 2,
      name: "ECLIPSE TRACK JACKET [GREY]",
      price: "$149.00",
      image: "public/product2.jpg",
      type: "accessories",
      material: "polyester",
      color: "gray",
      size: "L",
      season: "winter",
      fasteners: "zipper",
      collection: "24",
    },
    {
      id: 3,
      name: "OVERDYED BIKER JACKET [CHARCOAL]",
      price: "$179.00",
      image: "public/product3.jpg",
      type: "top",
      material: "cotton",
      color: "gray",
      size: "L",
      season: "winter",
      fasteners: "zipper",
      collection: "25",
    },
    {
      id: 4,
      name: "CORDUROY PANTS [BLACK]",
      price: "$109.00",
      image: "public/H_R.jpg",
      type: "bottom",
      material: "cotton",
      color: "black",
      size: "L",
      season: "winter",
      fasteners: "button",
      collection: "25",
    },
    {
      id: 5,
      name: "STREET CROSSBODY BAG [WHITE]",
      price: "$69.00",
      image: "public/t1.jpg",
      type: "accessories",
      material: "polyester",
      color: "white",
      size: "N/A", // Accessories usually don’t have size
      season: "summer",
      fasteners: "zipper",
      collection: "24",
    },
    {
      id: 6,
      name: "VINTAGE LOGO TEE [RED]",
      price: "$59.00",
      image: "public/t2.jpg",
      type: "top",
      material: "cotton",
      color: "red",
      size: "M",
      season: "summer",
      fasteners: "none",
      collection: "24",
    },
    {
      id: 7,
      name: "WINDBREAKER HOODIE [WHITE]",
      price: "$139.00",
      image: "public/t3.jpg",
      type: "top",
      material: "nylon",
      color: "white",
      size: "L",
      season: "winter",
      fasteners: "zipper",
      collection: "25",
    },
    {
      id: 8,
      name: "DENIM CARGO PANTS [GRAY]",
      price: "$129.00",
      image: "public/t4.jpg",
      type: "bottom",
      material: "cotton",
      color: "gray",
      size: "L",
      season: "summer",
      fasteners: "button",
      collection: "25",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
