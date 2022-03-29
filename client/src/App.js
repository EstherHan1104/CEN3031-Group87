import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
//import Enroll from './components/pages/Enroll';
import About from './components/pages/About';
//import UserContext from '../src/components/context/User';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    );
    }
}

export default App;
