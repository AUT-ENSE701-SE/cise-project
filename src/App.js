import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from '../src/components/pages/HomePage';
import NavigationBar from '../src/components/general-components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
