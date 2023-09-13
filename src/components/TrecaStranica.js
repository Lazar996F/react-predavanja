import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { vijestiContext } from "../App";

const TrecaStranica = () => {
  const [stateTrece, postaviStateTrece] = useState("treca-ruta-test");

  const { vijesti, postaviNizVijesti } = useContext(vijestiContext);

  const vijestSaId_7 = vijesti.find((jednaVijest) => jednaVijest.id == 7);

  const smanjiNiz = () => {
    const uzmi10 = vijesti.slice(0, 10);
    postaviNizVijesti(uzmi10);
  };

  return (
    <>
      {vijestSaId_7 ? (
        <h2 style={{ color: "blue" }}>{vijestSaId_7.title}</h2>
      ) : (
        <h2>Nisam pronasao vijest</h2>
      )}
      <br />
      <Link to={`/trecaRuta/${stateTrece}`}>Idi na onu sa parametrom</Link>
      <br />
      <button onClick={() => smanjiNiz()}>smanji-niz</button>
    </>
  );
};

export default TrecaStranica;
