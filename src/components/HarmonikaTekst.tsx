import React,{useState} from 'react'


interface HarmonikaPropsi {
  naslovPosta: string
  opis: string
}


const HarmonikaTekst: React.FC<HarmonikaPropsi> = ({naslovPosta, opis}) => {
  const [show, setShow] = useState(false)
  return (
<div>
  <h1 onClick={() => setShow(true)}>{naslovPosta}</h1>
  {show && <p>{opis}</p>}
</div>
  );
}

export default HarmonikaTekst;