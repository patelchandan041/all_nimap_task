import React from 'react'
import { Redirect,Route } from 'react-router-dom'

const PrivateRoute=({children,...components})=>{
const auth = localStorage.getItem('user')
return (<Route{...components}render={()=>auth?(children):(<Redirect to={'/'}/>)}/>)
}
export default PrivateRoute