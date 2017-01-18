import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Cornell from './cornell/cornell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Cornell />
        <Header />
      </div>
    );
  }
}

export default App;
