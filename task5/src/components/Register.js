import React,{useState} from "react";
import {useHistory} from 'react-router-dom'

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const register = async(e) => {
        e.preventDefault()
        localStorage.setItem("email",email)
        localStorage.setItem("pass",password)
        await history.push('/login')
    }

    console.log(email,password)
    return(
        <div>
             <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input style={{ width: "400px", height: "25px", marginTop: "20px" }} placeholder="Name" />
                <input value={email} onChange={(e)=> setEmail(e.target.value)} style={{ width: "400px", height: "25px", marginTop: "20px" }}  placeholder="Email" />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{ width: "400px", height: "25px", marginTop: "20px" }} placeholder="Password" />
                <button className="form-btn"><span className="btn-txt" onClick={register}>Register</span></button>
            </form>
        </div>
    )
}

export default Register