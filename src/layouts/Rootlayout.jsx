import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <header>
            <h1>LEARNABLE</h1>
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