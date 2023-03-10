import React from 'react'
import { Link } from 'react-router-dom'; 
import '../styles/Body.css'

const HomeComponent = ({reyes}) => {
     const url = "https://www.html6.es/img/rey_"
    const resultado = reyes.map(e => <Link to={`/${e.nombre}`}>
    <div key={e.nombre} className="rei">
        <span className="rojo">{e.nombre.toUpperCase()}</span> 
        <strong> ha comido {e.reinado * e.vacasComidas * 365} vacas en sus {e.reinado} años</strong>
        <img className="imagenes" src={url + e.nombre.toLowerCase() + ".png"} alt={e.nombre}/>
    </div></Link>);
    
        return (
            <>
         
            <div className="res">{resultado}</div>

            </>
  )
}

export default HomeComponent