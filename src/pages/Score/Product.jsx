import React from 'react'
import maleProfile from '../../assets/maleProfile.jpg'
import femaleProfile from '../../assets/femaleProfile.jpg'
import { Link } from 'react-router-dom'

const Product = ({scoress}) => {
    scoress.sort((a,b) => b.Total - a.Total)
  return (
    <div>
            <h1 style={{textAlign: 'center'}}>PRODUCT DESIGN TRACK</h1>
        <div className="careers">
        {
            scoress
            .map(score => (
                <div className='navy' key={score.id}>
                    {(score.gender === 'male') ? <img src= {maleProfile} alt = 'male' />
                    : <img src= {femaleProfile} alt= "female"  />
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