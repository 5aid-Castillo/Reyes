import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'
import '../../styles/Header.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const close = () => {
      setOpen(!isOpen)
    }

  return (
    <>
        <nav className="navigation" >

                    <button className="burger">
                    <Hamburger  toggled={isOpen} toggle={setOpen} />
                            
                    </button>
                    <div className={isOpen ?"nav-menu" : "nav-menu expanded"}>
                     
                            <NavLink to="/" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Inicio</NavLink>
                      
                            <NavLink to="/Atanagildo" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Atanagildo</NavLink>
                       
                            <NavLink to="/Ataulfo" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Ataulfo</NavLink>
                   
                            <NavLink to="/Ervigio" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Ervigio</NavLink>
                     
                            <NavLink to="/Leogivildo" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Leovigildo</NavLink>

                            <NavLink to="/Recesvinto" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Recesvinto</NavLink>
                   
                            <NavLink to="/Sisebuto" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Sisebuto</NavLink>
                   
                            <NavLink to="/Teodorico" className={({isActive}) => (isActive ?"activado" :null)} onClick={close}>Teodorico</NavLink>
                       
                    </div>
                    <div class="dot"></div>
        </nav>
    </>
  )
}

export default Navbar