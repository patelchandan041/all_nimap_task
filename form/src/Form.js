import React, { useState } from "react";
import './Form.css'
function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const Submit = (e) => {
        e.preventDefault();
        if (!validEmail.test(email)) {
            setEmailErr(true);
         }
         else{
             setEmailErr(false)
         }
         if (!validPassword.test(password)) {
            setPwdError(true);
         }
         else{
             setPwdError(false)
         }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (!validEmail.test(email)) {
            setEmailErr(true);
         }
         else{
             setEmailErr(false)
         }
   
    }
    const passHandler = (e) => {
      setPassword(e.target.value)
      if (!validPassword.test(password)) {
        setPwdError(true);
     }
     else{
         setPwdError(false)
     }
    }
    return (
        <div>
            <h2 style={{ margin: "30px 590px" }}>Form Validation</h2>
            
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input style={{ width: "400px", height: "25px", marginTop: "20px" }} placeholder="Name" />
                <input style={{ width: "400px", height: "25px", marginTop: "20px" }} value={email}
                    onChange={emailHandler} placeholder="Email" />
                                {emailErr && <p style={{ color: "red" }}>Your email is invalid</p>}

                <input style={{ width: "400px", height: "25px", marginTop: "20px" }} value={password}
                    onChange={passHandler} placeholder="Password" />
                                {pwdError && <p style={{ color: "red" }}>Your password is invalid</p>}
                <button className="form-btn" onClick={Submit}><span className="btn-txt">Submit</span></button>
            </form>
        </div>
    )
}

export default Form