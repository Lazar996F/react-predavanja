import { useParams } from "react-router-dom";

const TrecaSaPromjenjivom = () => {
  const parametri = useParams();

  return (
    <>
      <h2 style={{ color: "grey", fontWeight: "bold" }}>
        Treca stranica sa parametrom
      </h2>
      <p style={{ color: "greenyellow", fontSize: "20px" }}>
        Prosljedjeni parametar iz URL-a:{" "}
        <span style={{ color: "black" }}>{parametri.promjenjiva}</span>
      </p>
    </>
  );
};

export default TrecaSaPromjenjivom;
