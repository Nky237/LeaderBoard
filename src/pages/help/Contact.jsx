import React from 'react'

const Contact = () => {
  return (
    <div className='con'>
        <h1>CONTACT US</h1>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Leave a message'>

            </textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact