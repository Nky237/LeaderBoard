import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ScoreLayout = () => {
  return (
    <div className='scoreLayout'>
        <h1>WELCOME TO LEADERBOARD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Perferendis dolor ut laboriosam qui, inventore animi eveniet ex illum 
             tempore vero?</p>
          <nav>
          <nav>
                <NavLink to='fronto'>FRONTEND</NavLink>
                <NavLink to='backo'>BACKEND</NavLink>
                <NavLink to='product'>PRODUCT DESIGN</NavLink>
            </nav>  
          </nav>
         <Outlet />
    </div>
  )
}

export default ScoreLayout