import { useContext } from "react";
import { vijestiContext } from "../App";

const StranicaVijesti = () => {
  const vijestData = useContext(vijestiContext);

  return (
    <>
      <h1>VIJESTI</h1>
      <p>Ukupno vijesti {vijestData.vijesti.length}</p>
      {vijestData.vijesti.map((jednaVijest) => (
        <div key={jednaVijest.id}>
          <h3 style={{ fontWeight: "bold", color: "green" }}>
            {jednaVijest.title}
          </h3>
          <p style={{ color: "grey" }}>{jednaVijest.body}</p>
        </div>
      ))}
    </>
  );
};

export default StranicaVijesti;
