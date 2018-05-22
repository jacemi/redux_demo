import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import AppTitle from '../../components/AppTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      
        </header>
        <AppTitle title="My Book List"/>
      </div>
    );
  }
}

export default App;
