import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { ExtraFilterProvider } from "./context/ExtraFilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FilterProvider>
      <ProductProvider>
        <ExtraFilterProvider>
          <CartProvider>
            <ThemeProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </ThemeProvider>
          </CartProvider>
        </ExtraFilterProvider>
      </ProductProvider>
    </FilterProvider>
  </BrowserRouter>
);
