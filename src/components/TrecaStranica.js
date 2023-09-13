import { useState } from "react";
import { Link } from "react-router-dom";

const TrecaStranica = () => {
  const [stateTrece, postaviStateTrece] = useState("treca-ruta-test");

  return (
    <>
      <h2 style={{ color: "blue" }}>Ovo je treca ruta</h2>
      <br />
      <Link to={`/trecaRuta/${stateTrece}`}>Idi na onu sa parametrom</Link>
    </>
  );
};

export default TrecaStranica;
