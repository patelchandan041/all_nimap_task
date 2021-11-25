import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <NavLink  className="navlink" activeClassName="active" to="/lifecycle">Lifecycle</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/cond-render">Cond-render</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/hooks-crud">hooks-crud</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/handling-event">handling-event</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/props">props</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/form-ref">form-ref</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/mui">Mui</NavLink>
            <NavLink  className="navlink" activeClassName="active" to="/formik">Formik</NavLink>
        </div>
    )
}

export default Navbar
