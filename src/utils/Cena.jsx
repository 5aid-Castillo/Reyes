import React from 'react'
import '../styles/Body.css';

const Cena = ({nombre,precio,color,setTotal}) => {
  
    const ruta = "http://www.html6.es/img/rey_";
    const imagen = `${ruta}${nombre.toLowerCase()}.png`;

    const comprar = (element) => {
        setTotal((e) => e + precio);
        element.target.parentNode.parentNode.parentNode.style.display = "none"
    }
    return (
        <>
            <div className="rei" style={{backgroundColor:color}}>
                <h1>{nombre}</h1>
                <center><img src={imagen} alt={nombre}/></center>
               
                 <div className='precio'><span>${precio}</span>
                  <div><button className="buy" onClick={comprar}>Reservar</button></div>
                </div>
            </div>
        </>
  )
}

export default Cena