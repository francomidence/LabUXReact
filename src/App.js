import React, { Component } from 'react';
import './App.css';
import MyInput from './MyInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <MyInput/>
        </header>
      </div>
    );
  }
}

export default App;
