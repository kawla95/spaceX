import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Company from "./components/Company";
import Rockets from "./components/Rockets";

export default function App() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </>
    </HashRouter>
  );
}
