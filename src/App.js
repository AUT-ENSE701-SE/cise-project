import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "../src/components/pages/HomePage";
import SubmitPage from "../src/components/pages/SubmitPage";
import NavigationBar from "../src/components/general-components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/submit" component={SubmitPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
