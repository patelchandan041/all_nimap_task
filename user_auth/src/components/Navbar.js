import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
   
    return (
        <div className="navbar">
                <h3>Navbar</h3>
            <nav className="nav">
                <li><Link className="link" to='/'>Login</Link></li>
                <li><Link className="link"  to='/register'>Register</Link></li>
                {/* <li><Link className="link"  to='/dashboard'>Dashboard</Link></li> */}
            </nav>
            </div>
    )
}

export default Navbar
