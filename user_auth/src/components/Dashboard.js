import React from "react";
import {useHistory} from 'react-router-dom'

function Dashboard () {
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem("user");
        history.push('/')
    }
    return(
        <div>
           <h1>Dashboard</h1>
           <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard