import { createContext, useState } from "react";

export const formContext = createContext("test");
const ContextProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState({});
  return (
    <formContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </formContext.Provider>
  );
};

export default ContextProvider;
