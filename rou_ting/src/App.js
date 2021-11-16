import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { ErrorBoundary } from 'react-error-boundary';
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
        <ErrorBoundary>
        <Navbar />
        </ErrorBoundary>
       <Switch>
          <Route path="/about">
            <ErrorBoundary>
            <About />
            </ErrorBoundary>
          </Route>
          <Route path="/portfolio">
            <ErrorBoundary>
           <Portfolio />
           </ErrorBoundary>
          </Route>
          <Route path="/contactus">
            <ErrorBoundary>
           <ContactUs />
           </ErrorBoundary>
          </Route>
          <Route path="/">
            <ErrorBoundary>
            <Home />
            </ErrorBoundary>
          </Route>
                  </Switch>
     
    </Router>
    </div>
  );
}

export default App;
