import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [currentUserKey, setCurrentUserKey] = useState(null);

  useEffect(() => {
    // Get current logged-in user from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && currentUser.email) {
      const userKey = `cart_${currentUser.email}`;
      setCurrentUserKey(userKey);

      const savedCart = JSON.parse(localStorage.getItem(userKey)) || [];
      setCart(savedCart);
    } else {
      setCurrentUserKey(null);
      setCart([]); // no user, reset cart
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage under the current user's key
    if (currentUserKey) {
      localStorage.setItem(currentUserKey, JSON.stringify(Cart));
    }
  }, [Cart, currentUserKey]);

  return (
    <CartContext.Provider value={[Cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
