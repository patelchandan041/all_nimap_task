import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    
    return (
        <div className="navbar">
                <h3>Navbar</h3>
            <nav className="nav">
                <li><Link className="link" to='/'>Home</Link></li>
                <li><Link className="link"  to='/about'>About</Link></li>
                <li><Link className="link"  to='/contactus'>Contact</Link></li>
                <li><Link className="link"  to='/portfolio'>Portfolio</Link></li>
                </nav>
            
        </div>
    )
}

export default Navbar
