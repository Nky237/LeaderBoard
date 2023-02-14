import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ScoreDetails = () => {
    const {id} = useParams()
    const score = useLoaderData()
  return (
    <div className='career-details'>
        <h2>More Score Details for {score.name}</h2>
        <p>Task 1 score is {score.location}</p>
        <p>Task 2 score is {score.salary}</p>
        <div className="details">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias voluptates earum quae vero, molestiae laudantium quia consequatur suscipit rem magnam. Nesciunt deserunt temporibus voluptatem! Enim 
                modi quod, beatae cumque nostrum ut eaque doloremque blanditiis ipsum esse in sed molestiae.
            </p>
        </div>
    </div>
  )
}

export default ScoreDetails

export const scoreDetailsLoader = async({params})=>{
    const { id } = params
const res = await fetch(' http://localhost:4000/scoress/' + id)
return res.json()
}