import React, { useState } from "react";
import './Form.css';

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
        <div className="div">
            <h2 className="heading">Form Validation</h2>
            
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input autoFocus className="inputs"  placeholder="Name" />
                <input className="inputs"  value={email}
                    onChange={emailHandler} placeholder="Email" />
                                {emailErr && <p className="error">Incorrect email type</p>}

                <input className="inputs"  value={password}
                    onChange={passHandler} placeholder="Password" />
                                {pwdError && <p className="error">Your password is weak</p>}
                <button className="form-btn" onClick={Submit}><span className="btn-txt">Submit</span></button>
            </form>
        </div>
    )
}

export default Form