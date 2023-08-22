import React, { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get("source");
    console.log(paramValue);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/jha/" element={<HomePage />} />
        <Route path="/jha/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
