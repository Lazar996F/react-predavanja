import { useFormik } from "formik";

import { sacuvajIzmjeneZaKorisnika } from "../helpers/zahtjevi";

const FormaZaIzmjenu = ({ pocetneVrijednosti, korisnikovId }) => {
  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: pocetneVrijednosti,
    onSubmit: (values) => {
      sacuvajIzmjeneZaKorisnika(korisnikovId, values).then(() => {
        alert("Uspjesno ste Izmjenili podatke o korisniku");
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} className="forma-style">
      <input
        value={values.ime}
        onChange={handleChange}
        placeholder="Unesite ime"
        name="ime"
      />
      <input
        value={values.email}
        onChange={handleChange}
        placeholder="Unesite email"
        name="email"
      />
      <input
        value={values.godine}
        onChange={handleChange}
        placeholder="Unesite godine"
        name="godine"
        type="number"
      />
      <input type="submit" />
    </form>
  );
};

export default FormaZaIzmjenu;
