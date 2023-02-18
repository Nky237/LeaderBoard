import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Trophy from '../assets/trophy.jfif'

const ScoreLayout = () => {
  return (
    <div className='scoreLayout'>
        <h1 style={{textAlign:'center', paddingBottom: '20px'}}>WELCOME TO LEADERBOARD</h1>
          <section className='Home'>
              <main>
              <p>Leaderboards with points rankings can be very useful for both companies and sports clubs, as they're a practical way to make a visual summary of players' or workers' results. This format gives information on how the competition has gone and summarizes the final results. Also, it's useful to communicate what each individual has achieved, as motivation for everyone.</p>
             <p>To see the details of each track, kindly click on the track button</p>
                <p>To see more details, click on the <b>see more</b> on each students card</p>

                </main>  
                <div>
                    <img src={Trophy} alt="trophy" />
                </div>
          </section>        
          
          <nav>
          <nav className='scoro'>
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