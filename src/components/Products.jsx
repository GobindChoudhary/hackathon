import Cards from "./Cards";
import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import DropDown from "./DropDown";
import { motion } from "framer-motion";

const Product = () => {
  const { filters } = useContext(FilterContext);
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className={`h-screen flex flex-col font-sans overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Topbar */}
      <div
        className={`sticky top-0 z-30 py-4 px-6 border-b flex flex-col md:flex-row justify-between gap-4 md:items-center transition-colors duration-500 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-black"
        }`}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filters.type.toUpperCase()}
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search items..."
            className={`px-4 py-2 text-sm w-full sm:w-64 border transition-all duration-200 focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:ring-gray-500"
                : "bg-white border-black text-black focus:ring-black"
            }`}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className={`px-5 py-2 text-sm w-full sm:w-auto transition ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-black text-white hover:bg-opacity-90"
            }`}
          >
            SEARCH
          </button>
        </motion.div>
      </div>

      {/* Filter Dropdown */}
      <div
        className={`sticky top-[4.3rem] z-20 py-2 px-6 border-b transition-colors duration-500 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-neutral-300"
        }`}
      >
        <DropDown />
      </div>

      {/* Cards Section */}
      <div className="flex-1 overflow-y-auto px-6 pb-10">
        <Cards searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Product;
