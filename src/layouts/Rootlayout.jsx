import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Rootlayout = () => {
  return (
    <div>
        <header>
            <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>LEARNABLE</h1>
            </div>
            <nav>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='leader'>LEADERBOARD</NavLink>
                <NavLink to='help'>HELP</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Rootlayout