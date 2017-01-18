import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Cornell from './cornell/cornell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Cornell />
      </div>
    );
  }
}

export default App;
