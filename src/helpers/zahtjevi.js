import axios from "axios";

const LAZNI_SERVER_URL =
  "https://65081e5556db83a34d9bc799.mockapi.io/api/korisnik";

const POSTOVI_LAZNI_SERVER = "https://jsonplaceholder.typicode.com/posts";
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

export const ucitajKorisnikeSaPostovima = async () => {
  try {
    //ovdje nizemo requeste

    const { data: sviKorisnici } = await axios.get(LAZNI_SERVER_URL);

    const { data: postovi } = await axios.get(POSTOVI_LAZNI_SERVER);

    const korisnikMladjiOd18 = sviKorisnici.find(
      (jedanKorisnik) => jedanKorisnik.godine < 18
    );

    if (korisnikMladjiOd18) {
      throw new Error("Jedan od korisnika je mladji od 18");
    }

    return {
      sviKorisnici,
      postovi,
    };
  } catch (greska) {
    //ovdje se igramo sa greskom
    console.log(greska);
  }
};
