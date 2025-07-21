import { createContext, useState } from "react";

// Create the context
export const FilterContext = createContext();

// Provider component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    type: "all", // default value
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
