import React,{ useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ucitajJednogKorisnikaPoID } from '../helpers/zahtjevi'
import FormaZaIzmjenu from './FormaZaIzmjenu'

interface Korisnik {
    ime: String,
    email: String,
    godine: Number
}

interface IzmjenaPodatakaProps {

}

const IzmjenaPodatakaStranica: React.FC<IzmjenaPodatakaProps> = () => {
    const [jedanKorisnik, setJedanKorisnik] = useState<Korisnik>({
        ime: '',
        email: '',
        godine: 18
    })
    const [loading, setLoading] = useState<boolean>(true)

    const {korisnikID} = useParams()

    useEffect(() => {
        setLoading(true)
        ucitajJednogKorisnikaPoID(korisnikID).then(odgovor => setJedanKorisnik(odgovor.data)).then(() => setLoading(false))
    }, [])


    return (<>
        <h3>Forma za izmjenu podataka o korisniku</h3>
        {!loading && <FormaZaIzmjenu pocetneVrijednosti={jedanKorisnik} korisnikovId={korisnikID}/>}
    </>)
}

export default IzmjenaPodatakaStranica