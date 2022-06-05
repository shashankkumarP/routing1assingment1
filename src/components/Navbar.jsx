import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <h1>Navbar</h1>
        <Link to="/">Home</Link>
        <Link to='/products'>Products</Link>
        
    </div>
  )
}
