import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import About from './about/about';
import Timeline from './timeline/timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Timeline />
        <footer>
          <a href="https://www.linkedin.com/in/leungjames" title="LinkedIn" className="linkedin" />
          <a href="https://twitter.com/jldork" title="Twitter" className="twitter" />
          <a href="https://github.com/jldork" title="Github" className="github" />
        </footer>
      </div>
    );
  }
}

export default App;
