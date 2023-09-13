import { useState } from "react";
import { Link } from "react-router-dom";

const DrugaStranica = () => {
  const [parametarBrojac, postaviBrojac] = useState(0);

  return (
    <>
      <h2 style={{ color: "green" }}>Ovo je druga ruta</h2>
      <div>
        <p>Brojac koji na klik povecava vrijednost parametra za 1</p>
        <p>Vrijednost brojaca: {parametarBrojac}</p>
        <button onClick={() => postaviBrojac(parametarBrojac + 1)}>+</button>
      </div>
      <Link to={`/trecaRuta/${parametarBrojac}`}>Idi na onu sa parametrom</Link>
    </>
  );
};

export default DrugaStranica;
