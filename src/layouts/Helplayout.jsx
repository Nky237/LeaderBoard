import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Helplayout = () => {
  return (
    <div className='help-layout'>
        <h1>WELCOME TO OUR HELP SECTION</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id nulla impedit
             eligendi dolorum tempore! Voluptas quasi a facilis numquam necessitatibus, 
            fugiat assumenda vel aperiam sapiente consequatur dolorum, dolorem autem.</p>
            <nav>
                <NavLink to='faq'>View FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>
            <Outlet />
    </div>
  )
}

export default Helplayout