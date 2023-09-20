import { useState, useEffect } from "react";
import { ucitajKorisnikeSaPostovima } from "../helpers/zahtjevi";

import { toast } from "react-toastify";

export const usePostsWithUsers = () => {
  const [postovi, setPostovi] = useState([]);
  const [korisnici, setKorisnici] = useState([]);
  const [greska, setGreska] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ucitajKorisnikeSaPostovima()
      .then((data) => {
        setPostovi(data.postovi);
        setKorisnici(data.sviKorisnici);
      })
      .catch((error) => {
        setGreska(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    postovi,
    korisnici,
    loading,
    greska,
  };
};
