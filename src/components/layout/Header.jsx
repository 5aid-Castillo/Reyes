import React from 'react'

import '../../styles/Header.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
        <header className="header">
            <section className="header-section">
                <div className="title">
                    <a>Reyes</a>
                </div>
                <Navbar />

            </section>
        </header>
    </>
  )
}

export default Header