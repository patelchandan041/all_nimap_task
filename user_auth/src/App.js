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
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user,setUser] = useState("")
 
  console.log("user",user)

  useEffect(()=>{
    setUser(localStorage.getItem('user'))
  },[])

  
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    
       <Route exact path="/register" >
         <Navbar />
         <Register />
         </Route>
        <Route exact path="/"  >
          <Navbar />
          <Login />
          </Route>
          <PrivateRoute>
             <Route  path="/dashboard" component={Dashboard} />
         </PrivateRoute>
           
           {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
