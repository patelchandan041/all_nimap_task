import { BrowserRouter,Route,Switch } from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar from './Navbar';
import LifecycleTest from './Task/Lifecycle.js/LifecycleTest';
import Toggle from './Task/cond-render/Toggle';
import Home from './Task/hooks-crud/Home';
import Form from './Task/Handling-event/Form'
import ComponentA from './Task/props/ComponentA';
import FormRef from './Task/Form-ref/Form'
import Mui from './Task/materialui/Mui';
import FormVal from './Task/formik-val/Form'
import Chart from './Task/Chart/Chart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact >
          <h1>Home</h1>
        </Route>
        <Route path="/lifecycle" exact >
         <LifecycleTest />
        </Route>
        <Route path="/cond-render" exact >
          <Toggle />
        </Route>
        <Route path="/hooks-crud" exact >
          <Home />
        </Route>
        <Route path="/handling-event" exact >
          <Form />
        </Route>
        <Route path="/props" exact >
          <ComponentA />
        </Route>
        <Route path="/form-ref" exact >
          <FormRef />
        </Route>
        <Route path="/mui" exact >
          <Mui />
        </Route>
        <Route path="/formik" exact >
          <FormVal />
        </Route>
        <Route path="/chart" exact >
          <Chart />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
