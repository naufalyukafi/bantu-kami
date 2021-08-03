import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
