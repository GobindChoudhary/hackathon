import Cards from "./Cards";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import DropDown from "./DropDown";

const Product = () => {
  const { filters } = useContext(FilterContext);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Topbar */}
      <div className="  py-4 border-b border-black flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tight">
          {filters.type.toUpperCase()}
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search items..."
            className="border border-black px-4 py-2 text-sm w-full sm:w-64"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button className="bg-black text-white px-5 py-2 text-sm w-full sm:w-auto">
            SEARCH
          </button>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="py-4">
        <DropDown />
      </div>

      {/* Cards Section */}
      <div className="">
        <Cards />
      </div>
    </div>
  );
};

export default Product;
