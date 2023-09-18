import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ucitajJednogKorisnikaPoID } from '../helpers/zahtjevi'
import FormaZaIzmjenu from './FormaZaIzmjenu'

const IzmjenaPodatakaStranica = () => {
    const [jedanKorisnik, setJedanKorisnik] = useState(null)
    const [loading, setLoading] = useState(true)

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