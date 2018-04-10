import ReactGA from 'react-ga';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  contructor() {
    ReactGA.initialize('UA-20364009-4');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="Center">
        <img src={logo} className="Logo" alt="logo" />
      </div>
    );
  }
}

export default App;
