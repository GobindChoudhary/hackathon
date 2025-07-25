import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const Sidebar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { darkMode } = useContext(ThemeContext); // Access darkMode from ThemeContext

  const handleFilterChange = (value) => {
    if (value === "all") {
      setFilters({
        type: "all",
        collection: "",
        color: "",
        material: "",
        season: "",
      });
    } else if (value === "new") {
      setFilters((prev) => ({ ...prev, type: "all", collection: "new" }));
    } else {
      setFilters((prev) => ({ ...prev, type: value, collection: "" }));
    }
  };

  const links = ["all", "top", "bottom", "accessories", "new"];

  return (
    <div>
      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 py-4 transition-colors duration-500 ${
          darkMode
            ? "bg-gray-800 border-b border-gray-700 text-white"
            : "bg-white border-b border-black text-black"
        }`}
      >
        <select
          value={
            filters.type === "all" && filters.collection === "new"
              ? "new"
              : filters.type
          }
          onChange={(e) => handleFilterChange(e.target.value)}
          className={`w-full border px-4 py-2 uppercase focus:outline-none focus:ring-2 transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-white focus:ring-gray-500"
              : "bg-white border-black text-black focus:ring-black"
          }`}
        >
          <option value="">Select Category</option>
          {links.map((item, idx) => (
            <option key={idx} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:block h-full w-[180px] px-6 py-10 transition-colors duration-500 ${
          darkMode
            ? "bg-gray-900 border-r border-gray-700 text-white"
            : "bg-white border-r border-black text-black"
        }`}
      >
        <ul className="uppercase text-sm font-semibold tracking-wide space-y-2">
          {links.map((item, idx) => {
            const isActive =
              item === "new"
                ? filters.type === "all" && filters.collection === "new"
                : filters.type === item;

            return (
              <li key={idx}>
                <button
                  onClick={() => handleFilterChange(item)}
                  className={`w-full text-left px-3 py-2 transition-all duration-300 ease-in-out group ${
                    isActive
                      ? darkMode
                        ? "border-l-4 border-gray-500 bg-gray-800 text-white"
                        : "border-l-4 border-black bg-black/5 text-black"
                      : darkMode
                      ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                      : "text-black/70 hover:bg-black/10 hover:text-black"
                  }`}
                >
                  <span className="group-hover:pl-2 transition-all duration-300">
                    {item.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
