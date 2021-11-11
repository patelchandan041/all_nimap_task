import React,{useState,useEffect} from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './components/Register';

function App() {
  const [user,setUser] = useState("")
 
 
  console.log("user",user)
  useEffect(()=>{
    setUser(localStorage.getItem('user'))
  },[])

  
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
   <Switch>
    
       <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        {user? (<Route  path="/dashboard" component={Dashboard} />) :
        ( <Redirect to="/" />)
           }  
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
