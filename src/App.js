import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoApp from './Components/todo/ToDoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp/>
      </div>
    );
  }
}

export default App;
