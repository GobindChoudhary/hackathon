import { createContext, useState } from "react";

export const ExtraFilterContext = createContext();

export const ExtraFilterProvider = ({ children }) => {
  const [extraFilters, setExtraFilters] = useState({
    material: [],
    colors: [],
    size: [],
    season: [],
    fasteners: [],
    collection: [],
  });

  return (
    <ExtraFilterContext.Provider value={[extraFilters, setExtraFilters]}>
      {children}
    </ExtraFilterContext.Provider>
  );
};
