import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Score = () => {
    const scoress = useLoaderData() 
  return (
    <div className='careers'>
        {
            scoress.map(score => (
                <div className='navy' key={score.id}>
                    <h3>{score.name}</h3>
                    <p>Has a total score of {score.salary}</p>
                    <Link to='/'>See more</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Score

export const scoreLoader = async()=>{
    const res =  await fetch(' http://localhost:4000/scoress')
    return res.json()
}