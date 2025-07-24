import { useContext, useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { ExtraFilterContext } from "../context/ExtraFilterContext";

const filters = [
  {
    name: "Materials",
    key: "material",
    options: ["Cotton", "Polyester", "Nylon"],
  },
  { name: "Colors", key: "colors", options: ["Black", "White", "Grey"] },
  { name: "Season", key: "season", options: ["Summer", "Winter", "Spring"] },
  { name: "Fasteners", key: "fasteners", options: ["Zipper", "Buttons"] },
  { name: "Collection", key: "collection", options: ["S/S 24", "F/W 25"] },
];

const DropDown = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [extraFilters, setExtraFilters] = useContext(ExtraFilterContext);
  const dropdownRef = useRef();

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mt-2 text-sm font-medium uppercase">
      {filters.map((filter) => (
        <div key={filter.name} className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleFilter(filter.name)}
            className="flex items-center justify-between w-35 md:w-40  border border-black px-4 py-2 text-neutral-700 hover:text-black"
          >
            {filter.name}
            <RiArrowDownSLine className="ml-2 text-lg" />
          </button>
          {openFilter === filter.name && (
            <div className="absolute top-full mt-1 w-35 md:w-40 bg-white border border-black shadow z-10">
              {filter.options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleOption(filter.key, option)}
                  className={`px-4 py-2 text-xs cursor-pointer hover:bg-black hover:text-white ${
                    extraFilters[filter.key]?.includes(option)
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
