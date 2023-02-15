import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Score = () => {
    const scoress = useLoaderData() 
    scoress.sort((a,b) => b.Total - a.Total)
  return (
    <div className='careers'>
        {
            scoress
            .map(score => (
                <div className='navy' key={score.id}>
                    <h3>{score.name}</h3>
                    <p>Has a total score of {score.Total}</p>
                    <Link to={score.id.toString()}>See more</Link>
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