import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ScoreDetails = () => {
  const { id } = useParams()
  const score = useLoaderData()
  return (
    <div className='career-details'>
        <h2>More Score Details for {score.name}</h2>
        <p>Task 1 score is {score.Task1}</p>
        <p>Task 2 score is {score.Task2}</p>
        <p>Task 3 score is {score.Task3}</p>
        <p>Task 4 score is {score.Task4}</p>
        <p>Appraisal 1 score is {score.Appraisal1}</p>
        <p>Appraisal 2 score is {score.Appraisal2}</p>
        {/* <div className="details">
            <h3>DESCRIPTION</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias voluptates earum quae vero, molestiae laudantium quia consequatur suscipit rem magnam. Nesciunt deserunt temporibus voluptatem! Enim 
                modi quod, beatae cumque nostrum ut eaque doloremque blanditiis ipsum esse in sed molestiae.
            </p>
        </div> */}
    </div>
  )
}

export default ScoreDetails

// data loader
export const scoreDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('https://studentapi-lxrp.onrender.com/scoress/' + id)
  return res.json()
}

