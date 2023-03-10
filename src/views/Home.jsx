import React from 'react'
import HomeComponent from './HomeComponent'
import Button from '../components/common/Button'


const Home = () => {
  const reyes = [
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataulfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leogivildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
    return (
    <>
        <Button />
        <HomeComponent reyes={reyes}/>

    </>
  )
}

export default Home