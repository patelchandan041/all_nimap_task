import React from "react";
import './css/Dashboard.css'
import {useHistory} from 'react-router-dom'

function Dashboard () {
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem("user");
        history.push('/')
    }
    return(
        <div style={{display:"flex",flexDirection:"column",margin:"180px 600px"}}>
           <h1>Dashboard</h1>
           <button style={{padding:"5px 8px",borderRadius:"5px"}} onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard