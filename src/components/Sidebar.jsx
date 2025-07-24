import { useContext } from "react";
import { FilterContext } from "../context/FilterContext"; // adjust path

const Sidebar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const links = ["all", "new", "outer", "top", "bottom", "accessories"];

  return (
    <div className="">
      {/* Mobile Dropdown Filter */}
      <div className="md:hidden px-4 py-2">
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, type: e.target.value }))
          }
          className="w-full border border-gray-300 px-4 py-2 text-sm text-gray-700 bg-white rounded"
        >
          <option value="">Select Category</option>
          {links.map((item, index) => (
            <option key={index} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Vertical Sidebar */}
      <aside className="hidden md:block min-w-[150px] border-r border-gray-200 px-6 py-10">
        <ul className=" uppercase text-sm font-medium tracking-wider">
          {links.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setFilters((prev) => ({ ...prev, type: item }))}
                className={`block transition-colors capitalize duration-200 ${
                  filters.type === item
                    ? "text-red-600 font-bold"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
