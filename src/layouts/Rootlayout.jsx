import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { GiHamburgerMenu } from 'react-icons/gi';

const Rootlayout = () => {
  const [isOpen, setisOpen] = useState(false)
  const toggleMenu = () =>{
    setisOpen(!isOpen)
  }
  return (
    <div>
        <header>
            <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>LEARNABLE</h1>
            </div>
            <nav  className={
          isOpen ? "expanded" : "Navy"
        }>
              <ul>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='leader'>LEADERBOARD</NavLink>
                <NavLink to='help'>HELP</NavLink>
              </ul>
            </nav>
            <div className="ham">
            <GiHamburgerMenu onClick={toggleMenu} />
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Rootlayout