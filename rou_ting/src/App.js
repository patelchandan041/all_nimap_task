import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import Portfolio from './Portfolio';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
           <Portfolio />
          </Route>
          <Route path="/contactus">
           <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
                  </Switch>
     
    </Router>
    </div>
  );
}

export default App;
