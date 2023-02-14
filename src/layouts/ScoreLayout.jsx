import React from 'react'
import { Outlet } from 'react-router-dom'

const ScoreLayout = () => {
  return (
    <div>
        <h1>WELCOME TO LEADERBOARD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Perferendis dolor ut laboriosam qui, inventore animi eveniet ex illum 
             tempore vero?</p>
         <Outlet />
    </div>
  )
}

export default ScoreLayout