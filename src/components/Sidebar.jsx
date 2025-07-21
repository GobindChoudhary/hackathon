import { useContext } from "react";
import { FilterContext } from "../context/FilterContext"; // adjust path

const Sidebar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const links = ["all", "new", "outer", "top", "bottom", "accessories"];
    return (
    <aside className="min-w-[150px] border-r border-gray-200 px-6 py-10">
      <ul className="space-y-6 uppercase text-sm font-medium tracking-wider">
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
  );
};

export default Sidebar;
