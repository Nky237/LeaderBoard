import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

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
            <nav className={`Navy  ${isOpen && 'active'}`}>
              <ul >
                <NavLink onClick={toggleMenu} to='/'>HOME</NavLink>
                <NavLink onClick={toggleMenu} to='leader'>LEADERBOARD</NavLink>
                <NavLink onClick={toggleMenu} to='help'>HELP</NavLink>
              </ul>
            </nav>
            <div className="ham">
            {/* <GiHamburgerMenu onClick={toggleMenu} /> */}
            <p onClick={toggleMenu}>{isOpen? <FaTimes />  : <GiHamburgerMenu /> }</p>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Rootlayout