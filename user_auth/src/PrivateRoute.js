import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Login'

export const PrivateRoute=(props)=>{

const email=localStorage.getItem("user")
console.log(email)
// const password=localStorage.getItem("password")

if(email)
{
    return <Route exact path={props.path} component={props.component}/>
}
else
{
    return <Login{...props}/>
}
}
export default PrivateRoute