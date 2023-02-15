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
                <NavLink to='front'>Front End</NavLink>
                <NavLink to='back'>Back End</NavLink>
                <NavLink to='product'>Product Design</NavLink>
            </nav>  
          </nav>
         <Outlet />
    </div>
  )
}

export default ScoreLayout