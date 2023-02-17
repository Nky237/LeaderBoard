import React from 'react'
import maleProfile from '../../assets/maleProfile.jpg'
import femaleProfile from '../../assets/femaleProfile.jpg'
import man1 from '../../assets/man1.jfif'
import woman1 from '../../assets/woman1.jfif'
import { Link, useLoaderData } from 'react-router-dom'
 

const Product = () => {
    const scoress = useLoaderData() 
    scoress.sort((a,b) => b.Total - a.Total)
  return (
    <div>
            <h1 style={{textAlign: 'center'}}>PRODUCT DESIGN TRACK</h1>
        <div className="careers">
        {
            scoress
            .map(score => (
                <div className='navy' key={score.id}>
                    {(score.gender === 'male') ? <img src= {man1} alt = 'male' />
                    : <img src= {woman1} alt= "female"  />
                }
                    <h3>{score.name}</h3>
                    <p>Has a total score of {score.Total}</p>
                    <div className="details">
            <h3>DESCRIPTION</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias voluptates earum quae vero, molestiae laudantium quia consequatur suscipit rem magnam. Nesciunt deserunt temporibus voluptatem! Enim 
                modi quod, beatae cumque nostrum ut eaque doloremque blanditiis ipsum esse in sed molestiae.
            </p>
                </div>    
                <Link to={score.id.toString()} key={score.id}>See more</Link>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Product
export const scoreLoader = async()=>{
    const res =  await fetch(' https://leaderboard-mockapi.onrender.com/scoress')
    return res.json()
}