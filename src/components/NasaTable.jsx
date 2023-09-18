import {useNavigate} from 'react-router-dom'

const NasaTable = ({nizPodataka, obrisiKorsnika}) => {
  const navigateTo = useNavigate()

return (
<table>
  <tr>
    <th>IME</th>
    <th>Email adresa</th>
    <th>Godine</th>
  </tr>
  {
    nizPodataka.map((jedanPodatak,index) => (
        <tr key={index} onClick={() => navigateTo(`/korisnik/${jedanPodatak.id}`)} className="red-tabele">
        <td>{jedanPodatak.ime}</td>
        <td>{jedanPodatak.email}</td>
        <td>{jedanPodatak.godine}</td>
        <td className="obrisi-kolona" onClick={(e) => {
          e.stopPropagation();
          obrisiKorsnika(jedanPodatak.id);
          }}>Obrisi</td>
      </tr>
    ))
  }
</table>
    )
}

export default NasaTable;