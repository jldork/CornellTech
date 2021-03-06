import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Cornell from './cornell/cornell';
import Waypoint from 'react-waypoint';

let not_faded_yet = true;

class App extends Component {
  _handleWaypointEnter() {
    if (not_faded_yet) {
      const element = document.getElementsByClassName("nav-content")[0];
      let op = 0.1;  // initial opacity
      let timer = setInterval(() => {
        if (op >= 1) {
          clearInterval(timer);
        } else {
          element.style.opacity = op;
          element.style.filter = 'alpha(opacity=' + op * 100 + ")";
          op += op * 0.02;
        }
      }, 10);
      not_faded_yet = false;
    }
  }
  render() {
    return (
      <div className="App">
        <About />
        <Cornell />
        <Waypoint onEnter={this._handleWaypointEnter} />
        <Header />
      </div>
    );
  }
}

export default App;
