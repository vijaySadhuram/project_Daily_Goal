import React from 'react'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav>Get Ready to complete your Goal</nav>
    <div className='header'>
     
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </div>

    </>
  )
}

export default Header;
