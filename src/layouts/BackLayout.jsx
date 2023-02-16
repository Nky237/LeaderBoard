import React from 'react'
import { Outlet } from 'react-router-dom'

const BackLayout = () => {
  return (
    <div>
        <div>
        </div>
        <Outlet />
    </div>
  )
}

export default BackLayout