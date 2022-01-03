import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Intro from './containers/intro/intro';
import { Home, Market } from './pages'
import { Nav } from './layout'


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/market" component={Market} />

        </Switch>
      </Router>

    </>
  );
}

export default App;
