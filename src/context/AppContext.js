import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  return context;
};
