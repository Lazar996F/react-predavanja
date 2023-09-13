import { Link } from "react-router-dom";

const PrvaRutaKomponenta = () => {
  const paramPrveStrane = "iz prve stranice";

  return (
    <>
      <p className="boja-prve-stranice">Stranica prve rute</p>
      <Link to={`/trecaRuta/${paramPrveStrane}`}>Idi na onu sa parametrom</Link>
    </>
  );
};

export default PrvaRutaKomponenta;
