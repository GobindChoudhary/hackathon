import { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full ">
      <Navbar />

      {/* Sidebar Toggle Button (Mobile Only) */}

      <div className="flex flex-col md:flex-row  ">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="flex-1 px-4 md:px-8">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
