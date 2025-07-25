import { createContext, useState, useEffect } from "react";

// Create the context
export const FilterContext = createContext();

// Provider component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(() => {
    // Retrieve the filters from localStorage or default to an initial value
    const savedFilters = localStorage.getItem("filters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          type: "all", // default value
        };
  });

  useEffect(() => {
    // Save the filters to localStorage whenever they change
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// ExtraFilterContext
export const ExtraFilterContext = createContext();

export const ExtraFilterProvider = ({ children }) => {
  const [extraFilters, setExtraFilters] = useState(() => {
    // Retrieve the filters from localStorage or default to an empty object
    const savedFilters = localStorage.getItem("extraFilters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          material: [],
          colors: [],
          size: [],
          season: [],
          fasteners: [],
          collection: [],
        };
  });

  useEffect(() => {
    // Save the filters to localStorage whenever they change
    localStorage.setItem("extraFilters", JSON.stringify(extraFilters));
  }, [extraFilters]);

  return (
    <ExtraFilterContext.Provider value={[extraFilters, setExtraFilters]}>
      {children}
    </ExtraFilterContext.Provider>
  );
};
