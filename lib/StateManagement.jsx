import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function StateManagement({ children }) {
  const [navState, setnavState] = useState(0); // naviagtion

  let sharedState = {
    navigation: [navState, setnavState],
  };

  return (
    <AppContext.Provider value={sharedState}>{children} </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
