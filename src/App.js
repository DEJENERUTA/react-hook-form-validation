import React, { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import ContextProvider from "./context/Context";

import "./App.css";

function App() {
  return (
    <div className="App  w-1/2 h-1/2 m-auto text-center">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/creditcard" element={<CreditCard />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
