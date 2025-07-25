import { useState, useContext } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../context/ThemeContext";

const ProductList = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      {/* Main Content with Top Margin */}
      <div className="mt-14 flex flex-col md:flex-row">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="flex-1">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
