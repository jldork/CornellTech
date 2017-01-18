import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Timeline from './timeline/timeline';
import Industry from './industry/industry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <div className="line" />
        <Timeline />
        <div className="line" />
        <div className="industry">
          <Industry />
        </div>
      </div>
    );
  }
}

export default App;
