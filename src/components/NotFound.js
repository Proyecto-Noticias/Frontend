import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <h3>Error 404</h3>
      <Link to='/'>Go Home</Link>
    </div>
  )
}
