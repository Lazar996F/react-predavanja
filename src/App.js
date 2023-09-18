import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import PrvaStranica from "./components/PrvaStranica";
import DrugaStranica from "./components/DrugaStranica";
import TrecaStranica from "./components/TrecaStranica";
import TrecaSaPromjenjivom from "./components/TrecaSaPromjenjivom";
import GlavniHeader from "./components/GlavniHeader";
import NePostojecaRuta from "./components/NePostojecaRuta";
import StranicaVijesti from "./components/StranicaVijesti";
import PocetnaStranica from "./components/PocetnaStranica";
import IzmjenaPodatakaStranica from "./components/IzmjenaPodatakaStranica";

export const vijestiContext = createContext();

function App() {
  useEffect(() => {
    document.title = "REACT PREDAVANJA";
  }, []);
  const [nizVijesti, postaviNizVijesti] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((odgovorOdApia) => postaviNizVijesti(odgovorOdApia.data))
      .then(() => setLoading(false));
  }, []);

  if (loading === true) return <p>Loading</p>;

  return (
    <div className="App">
      <vijestiContext.Provider
        value={{ vijesti: nizVijesti, postaviNizVijesti }}
      >
        <BrowserRouter>
          <GlavniHeader />
          <Routes>
            <Route path="/" Component={PocetnaStranica} />
            <Route path="/prvaRuta" Component={PrvaStranica} />
            <Route path="/drugaRuta" Component={DrugaStranica} />
            <Route path="/trecaRuta" Component={TrecaStranica} />
            <Route path="/vijesti" Component={StranicaVijesti} />
            <Route
              path="/korisnik/:korisnikID"
              Component={IzmjenaPodatakaStranica}
            />
            <Route
              path="/trecaRuta/:promjenjiva"
              Component={TrecaSaPromjenjivom}
            />
            <Route path="*" Component={NePostojecaRuta} />
          </Routes>
        </BrowserRouter>
      </vijestiContext.Provider>
    </div>
  );
}

export default App;
