import { Image } from "react-bootstrap";
import nasaSlikaImg from "../slike/nasa-slika.jpg";
import animaSlika from "../slike/annima.png";

// T E R N A R I OPERATORI

//  && ovo je uslov i
// if else uslov se pise sa ? pa :

// CONDITIONAL RENDERING ili USLOVNO RENDANJE

const NasaSlika = ({ uslovZaPrikazSlike, onClick }) => {
  return uslovZaPrikazSlike === "primarna" ? (
    <Image src={nasaSlikaImg} roundedCircle onClick={onClick} />
  ) : (
    <img
      src={animaSlika}
      alt="Trulli"
      width="500"
      height="333"
      onClick={onClick}
    />
  );
};

export default NasaSlika;
