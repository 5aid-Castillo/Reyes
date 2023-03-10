import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Button.css'
const Button = () => {
  return (
    <>
   
    <div className="main-container-button">
        <div className="main-button">
            <Link to="/reservar">Reservar</Link>
        </div>
        </div>
       
    </>
  )
}

export default Button