import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>React Nav</h1>
        <ul>
            <Link to="/Login">
            <li>Login</li>
            </Link>
            <Link to="/Setting">
            <li>Setting</li>
            </Link>
            <li>Logout</li>
        </ul>
    </nav>
  )
}

export default Navbar