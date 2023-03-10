import React,{useState} from 'react'
import '../../styles/Burger.css'
import { Fade as Hamburger } from 'hamburger-react'

const Burger = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <>  
        <Hamburger className="burger" toggled={isOpen} toggle={setOpen} />
   </>
  )
}

export default Burger