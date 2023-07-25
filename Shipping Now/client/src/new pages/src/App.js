import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Avail from './pages/Avail';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign">
            <SignIn />
          </Route>
          <Route path="/avail">
            <Avail />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
