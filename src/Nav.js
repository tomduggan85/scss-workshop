import React from 'react'
import { Link } from 'react-router-dom'

/*
  TODO: create and import a scss file for the Nav styles

  Use a scss variable for the orange color
  Use a mixin for the hover styles on the clickable elements

*/

const Nav = () => (
  <div className='nav'>
    <Link to='/' className='title'>
      <img src='/robot.svg' alt=''/>GSG Robotics Club
    </Link>
    <div className='page-links'>
      <Link to='/'>Home</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/join'>Join</Link>
    </div>
  </div>
)

export default Nav