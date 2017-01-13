import React, { Component } from 'react';
import './App.css';

import Headshot from './Headshot.png';

import Header from './header/header';
import About from './about/about';
import Timeline from './timeline/timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <img alt="James Leung" src={Headshot} className="portrait" />
          <About />
        </div>
        <Timeline />
        <footer>
          <a href="https://www.linkedin.com/in/leungjames" title="LinkedIn" className="linkedin" />
          <a href="https://twitter.com/jldork" title="Twitter" className="twitter"/> 
          <a href="https://github.com/jldork" title="Github" className="github"/> 
        </footer>
      </div>
    );
  }
}

export default App;
