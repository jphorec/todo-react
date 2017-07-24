import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import TodoComponent from './components/TodoComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <TodoComponent/>
      </div>
    );
  }
}

export default App;
