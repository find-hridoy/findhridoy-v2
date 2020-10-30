import React from "react";
import "../src/Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Navigation /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
