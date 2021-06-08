import React, { Component } from 'react'
import './App.css';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Dashboard from './layout/dashboard';
import Footer from './layout/footer';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
