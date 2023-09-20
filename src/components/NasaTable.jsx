import {useNavigate} from 'react-router-dom'
import styled, {css} from 'styled-components'

const Table = styled.table`
  ${props => props.responsive === 'sm' && css`
  overflow-x: scroll;
  `}
`

const NasaTable = ({nizPodataka, obrisiKorsnika}) => {
  const navigateTo = useNavigate()

return (
<Table responsive="sm" className='m-3'>
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
</Table>
    )
}

export default NasaTable;