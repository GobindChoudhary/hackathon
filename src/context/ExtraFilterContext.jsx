import { createContext, useState, useEffect } from "react";

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
