import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrvaStranica from "./components/PrvaStranica";
import DrugaStranica from "./components/DrugaStranica";
import TrecaStranica from "./components/TrecaStranica";
import TrecaSaPromjenjivom from "./components/TrecaSaPromjenjivom";
import GlavniHeader from "./components/GlavniHeader";
import NePostojecaRuta from "./components/NePostojecaRuta";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlavniHeader />
        <Routes>
          <Route path="/" />
          <Route path="/prvaRuta" Component={PrvaStranica} />
          <Route path="/drugaRuta" Component={DrugaStranica} />
          <Route path="/trecaRuta" Component={TrecaStranica} />
          <Route
            path="/trecaRuta/:promjenjiva"
            Component={TrecaSaPromjenjivom}
          />
          <Route path="*" Component={NePostojecaRuta} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
