import { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import NasaTable from './NasaTable'
import { ucitajSveKorisnike, sacuvajNovogKorisnika, obrisiKorisnika } from '../helpers/zahtjevi'

const PocetnaStranica = () => {
const [listaKorisnika, setListaKorisnika] = useState([])
const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        ucitajSveKorisnike().then(biloSta => setListaKorisnika(biloSta.data)).then(() => setLoading(false))
    },[])

    const { values, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            ime: '',
            email: '',
            godine: 0
        },
        onSubmit: values => {
            sacuvajNovogKorisnika(values).then(() => {
                resetForm();
                alert('USPJESNO KREIRAN KORISNIK!')
                ucitajSveKorisnike().then(biloSta => setListaKorisnika(biloSta.data)).then(() => setLoading(false))
            }).catch(() => alert('GRESKA SA KREIRANJEM NOVOG KORISNIKA'))
          },
    })

    const obrisiKorisnikaPoID = (korisnikovID) => {
        obrisiKorisnika(korisnikovID).then(() => {
            alert('Uspjesno ste obrisali korisnika sa id:')
            ucitajSveKorisnike().then(biloSta => setListaKorisnika(biloSta.data)).then(() => setLoading(false))
        })
    }

return (
    loading ? <p>Loading...</p> : <div style={{marginTop:'40px'}}>
            <p>Pocetna stranice</p>


            <form onSubmit={handleSubmit} className='forma-style'>
            <input value={values.ime} onChange={handleChange} placeholder='Unesite ime' name="ime" />
            <input value={values.email} onChange={handleChange} placeholder='Unesite email' name="email"/>
            <input value={values.godine} onChange={handleChange} placeholder='Unesite godine' name="godine" type="number"/>
            <input type='submit'/>
            </form>
            <br/>
            <p>LISTA KORISNIKA {`(${listaKorisnika.length})`}</p>
            <NasaTable nizPodataka={listaKorisnika} obrisiKorsnika={obrisiKorisnikaPoID} />
       </div>)
}

export default PocetnaStranica;