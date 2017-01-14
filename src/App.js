import React, { Component } from 'react';
import './App.css';

import { SocialIcon } from 'react-social-icons';
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
        <div className="footer">
          <span>Come Find Me: </span>
          <ul className="social">
            <li><SocialIcon network="email" url="mailto:jamesleung417@gmail.com" /></li>
            <li><SocialIcon url="http://github.com/jldork" /></li>
            <li><SocialIcon url="http://linkedin.com/in/leungjames" /></li>
            <li><SocialIcon url="http://twitter.com/jldork" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
