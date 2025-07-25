import { useContext, useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { ExtraFilterContext } from "../context/ExtraFilterContext";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const filters = [
  {
    name: "Materials",
    key: "material",
    options: ["Cotton", "Polyester", "Nylon", "Denim"],
  },
  {
    name: "Colors",
    key: "colors",
    options: ["Black", "White", "Grey", "Blue"],
  },
  { name: "Season", key: "season", options: ["Summer", "Winter", "Spring"] },
  { name: "Fasteners", key: "fasteners", options: ["Zipper", "Buttons"] },
  {
    name: "Fitting",
    key: "fitting",
    options: ["Oversized", "Fit", "Relaxed"],
  },
  { name: "Collection", key: "collection", options: ["new", "old"] },
];

const DropDown = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [extraFilters, setExtraFilters] = useContext(ExtraFilterContext);
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext
  const dropdownRefs = useRef({});
  const [mounted, setMounted] = useState(false);

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const toggleOption = (key, option) => {
    const categoryArray = extraFilters[key] || [];
    const isSelected = categoryArray.includes(option);

    const updatedCategory = isSelected
      ? categoryArray.filter((item) => item !== option)
      : [...categoryArray, option];

    setExtraFilters((prev) => ({
      ...prev,
      [key]: updatedCategory,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!isClickInside) setOpenFilter(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-wrap gap-4 mt-2 text-sm font-semibold uppercase transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      {filters.map((filter) => (
        <div
          key={filter.name}
          ref={(el) => (dropdownRefs.current[filter.name] = el)}
          className="relative"
        >
          {/* Dropdown Button */}
          <button
            onClick={() => toggleFilter(filter.name)}
            className={`flex items-center justify-between min-w-[9rem] border px-4 py-2 transition duration-200 ${
              darkMode
                ? "border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
                : "border-black bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            {filter.name}
            <RiArrowDownSLine className="ml-2 text-lg" />
          </button>

          {/* Dropdown Content with animation */}
          <div
            className={`absolute top-full mt-1 min-w-[9rem] shadow-lg z-10 transform transition-all duration-200 origin-top ${
              openFilter === filter.name
                ? "scale-100 opacity-100 visible"
                : "scale-95 opacity-0 invisible pointer-events-none"
            } ${
              darkMode
                ? "bg-gray-800 border border-gray-700 text-white"
                : "bg-white border border-black text-black"
            }`}
          >
            {filter.options.map((option, idx) => {
              const selected = extraFilters[filter.key]?.includes(option);
              return (
                <div
                  key={idx}
                  onClick={() => toggleOption(filter.key, option)}
                  className={`px-4 py-2 text-xs cursor-pointer transition duration-150 ${
                    selected
                      ? darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-black text-white"
                      : darkMode
                      ? "hover:bg-gray-700 hover:text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
