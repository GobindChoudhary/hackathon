import Cards from "./Cards";
import { useContext } from "react";
// import { FilterContext } from "../context/FilterContext";
// import { ProductContext } from "../context/ProductContext";
import DropDown from "./DropDown";

const Product = () => {
  // const { products, setProducts } = useContext(ProductContext);
  // const { filters, setFilters } = useContext(FilterContext);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans  ">
      {/* Topbar */}
      <div className="px-12 py-4 border-b border-black flex justify-between items-center ">
        <h1 className="text-6xl font-bold uppercase tracking-tight">Outer</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Write something"
            className="border border-black px-4 py-2 w-72 text-sm"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button className="bg-black text-white px-5 py-2 text-sm">
            SEARCH
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-12">
        <DropDown />
      </div>
      <Cards />
    </div>
  );
};

export default Product;
