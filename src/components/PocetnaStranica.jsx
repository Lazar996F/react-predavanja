import { useState, useEffect } from 'react'
import {useFormik} from 'formik'
import NasaTable from './NasaTable'
import { ucitajSveKorisnike, sacuvajNovogKorisnika, obrisiKorisnika } from '../helpers/zahtjevi'
import { GlavniText } from '../styled/GlavniText'
import { NasButton } from '../styled/NasButton'
import HarmonikaTekst from './HarmonikaTekst.tsx'

const DUGACAK_TEKST = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut"
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
    <div style={{width:'900px'}}>
        <GlavniText velicina={10}>Ovo je styled glavni</GlavniText>
        <GlavniText velicina={24}>Ovo je styled glavni</GlavniText>
        <NasButton varijanta="secondary">styled</NasButton>
        <HarmonikaTekst opis='' naslovPosta="sadasd" /> 
        <br/>
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
       </div>
       </div>
       )
}

export default PocetnaStranica;