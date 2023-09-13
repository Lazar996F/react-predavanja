import { Link } from "react-router-dom";

const GlavniHeader = () => {
  return (
    <>
      <div className="topnav">
        <Link to="/">Pocetna</Link>
        <Link to="/prvaRuta">Prva stranica</Link>
        <Link to="/drugaRuta">Druga stranica</Link>
        <Link to="/trecaRuta">Treca stranica</Link>
        <Link to="/vijesti">VIJESTI</Link>
      </div>
    </>
  );
};

export default GlavniHeader;
