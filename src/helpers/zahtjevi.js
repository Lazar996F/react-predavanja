import axios from "axios";

const LAZNI_SERVER_URL =
  "https://65081e5556db83a34d9bc799.mockapi.io/api/korisnik";

// CREATE
export const sacuvajNovogKorisnika = (data) => {
  return axios.post(LAZNI_SERVER_URL, data);
};

// READ
export const ucitajSveKorisnike = () => {
  return axios.get(LAZNI_SERVER_URL);
};

// READ samo jednog
export const ucitajJednogKorisnikaPoID = (korisnikovID) => {
  return axios.get(`${LAZNI_SERVER_URL}/${korisnikovID}`);
};

// UPDATE
export const sacuvajIzmjeneZaKorisnika = (korisnikovID, noviPodaci) => {
  return axios.put(`${LAZNI_SERVER_URL}/${korisnikovID}`, noviPodaci);
};

// DELETE

export const obrisiKorisnika = (korinikovID) => {
  return axios.delete(`${LAZNI_SERVER_URL}/${korinikovID}`);
};
