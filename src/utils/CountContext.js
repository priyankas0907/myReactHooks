import { createContext, useContext, useState } from "react";

const CountContext = createContext(0);

export const useCount = () => useContext(CountContext);
export const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <CountContext.Provider value={{ count, incrementCount }}>
      {children}
    </CountContext.Provider>
  );
};
