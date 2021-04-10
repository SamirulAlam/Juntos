import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Event from "./Event";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Router>
          <Header />
        <Switch>
          
          <Route path="/event">
            <Event />
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
