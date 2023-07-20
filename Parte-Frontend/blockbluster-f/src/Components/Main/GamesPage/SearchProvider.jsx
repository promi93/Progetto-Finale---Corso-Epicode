import React, { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <SearchContext.Provider value={{ searchTitle, setSearchTitle }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
