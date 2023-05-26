import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div>
              <h1>Morir Soñando</h1>
              <h2>Authentic Dominican cuisine</h2>
              <nav>
                    <Link to='/'>Home</Link>
                    <br/>
<Link to='/menu'>Order Here</Link>
                    <br/>
<Link to='/login'>Login</Link>
                    <br/>
<Link to='/signUp'>Sign Up</Link>
                    <br/>
<Link to='/cart'>View Cart</Link>
                    <br/>
                    <Link to='/catering'>Catering</Link>
                    <br/>
              </nav>
    </div>
  )
}

export default Header

