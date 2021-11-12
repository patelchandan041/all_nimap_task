import React,{useState,useEffect} from "react";
import {useHistory} from 'react-router-dom'

function Login () {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [lemail,setLemail] = useState("")
  const [lpass,setLpass] = useState("")
 
  const history = useHistory()

  useEffect(()=>{
    setLemail( localStorage.getItem('email'))
    setLpass(localStorage.getItem('pass'))
  },[])

  const login = (e) =>{
    e.preventDefault();
    if(email === lemail && pass === lpass){
       localStorage.setItem('user',email)
       history.push('/dashboard')
    }else{
      alert("cannnot find user with this email")
    }
    
  }
  
    return(
        <div>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input onChange={(e)=> setEmail(e.target.value)} style={{ width: "400px", height: "25px", marginTop: "20px" }}  placeholder="Email" />
                <input onChange={(e)=> setPass(e.target.value)} style={{ width: "400px", height: "25px", marginTop: "20px" }} placeholder="Password" />
                <button className="form-btn"><span className="btn-txt" onClick={login}>Login</span></button>
            </div>
            </div>
    )
}

export default Login