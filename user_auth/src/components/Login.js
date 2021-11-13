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
           <div style={{ display: "flex", flexDirection: "column", alignItems: "center",paddingTop:"80px" }}>
                <input autoFocus onChange={(e)=> setEmail(e.target.value)} style={{ width: "400px",outline:"none", height: "25px", marginTop: "30px",borderRadius:"8px" }}  placeholder="Email" />
                <input type="password" onChange={(e)=> setPass(e.target.value)} style={{ width: "400px", height: "25px",outline:"none",  marginTop: "30px",borderRadius:"8px" }} placeholder="Password" />
                <button style={{padding:"5px 8px",borderRadius:"8px",marginTop:"50px",width:"100px"}} className="form-btn"><span className="btn-txt" onClick={login}>Login</span></button>
            </div>
            </div>
    )
}

export default Login