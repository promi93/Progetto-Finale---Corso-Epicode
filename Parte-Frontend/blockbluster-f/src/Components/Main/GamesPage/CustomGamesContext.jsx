import React, { createContext, useContext, useState } from "react";

const CreatedGamesContext = createContext();

export function useCreatedGames() {
  return useContext(CreatedGamesContext);
}

export function CreatedGamesProvider({ children }) {
  const [createdGames, setCreatedGames] = useState([]);

  return (
    <CreatedGamesContext.Provider value={{ createdGames, setCreatedGames }}>
      {children}
    </CreatedGamesContext.Provider>
  );
}
