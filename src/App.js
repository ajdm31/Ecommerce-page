import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Nav } from './layout'

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Nav />
                </Switch>
            </Router>
        </>
    );
}

export default App;
