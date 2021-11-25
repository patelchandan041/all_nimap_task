import React,{useRef,useState} from 'react'
import './Form.css'

function Form () {
   
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const Click = (e) => {
        const name = ref1.current.value;
        const email = ref2.current.value;
        const pass = ref3.current.value;
       
        console.log(name,email,pass)
     }

    return(
        <div className="form">
          <input ref={ref1} type="text" placeholder="Enter your name"  />
          <input ref={ref2} type="email" placeholder="Enter your email"  />
          <input ref={ref3} type="password" placeholder="Enter ypur password"  />
          <button onClick={Click} style={{width:"60px"}}>Click</button>
        </div>
    )
}

export default Form;