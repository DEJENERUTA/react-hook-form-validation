import React, { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import formContext from "./context/Context";

import "./App.css";

function App() {
  const [cardInfo, setCardInfo] = useState({});
  return (
    <div className="App  w-1/2 h-1/2 m-auto text-center">
      <formContext.Provider value={{ cardInfo, setCardInfo }}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/creditcard" element={<CreditCard />} />
        </Routes>
      </formContext.Provider>
    </div>
  );
}

export default App;
