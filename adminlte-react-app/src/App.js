import React, { Component } from 'react'
import './App.css';
import Header from './layout/header';
import Sidebar from './layout/sidebar';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default App;
