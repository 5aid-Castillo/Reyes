import React, {useState} from 'react'
import Cena from '../utils/Cena';
import '../styles/Body.css';

const Reservar = () => {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"#32C2C0",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    },{
      nombre:"Teodorico",
      color:"teal",
      precio:100
    }
  ]
  const [total,setTotal] = useState(0); 
  return (
   <>
    <div className="caja-text">
      <center><h1>Rerserva una cena con un Rey</h1><br />
      <h3>Total a pagar: <span className="total-color">${total}</span></h3></center>
    </div>
    <div className='caja-central'>
        <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal}/>
        <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal}/>
        <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal}/>
        <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} setTotal={setTotal}/>
        <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} setTotal={setTotal}/>
        <Cena nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} setTotal={setTotal}/>
{/*         <Cena nombre={reyes[6].nombre} color={reyes[6].color} precio={reyes[6].precio} setTotal={setTotal}/> */}
    </div>
   </>
  )
}

export default Reservar