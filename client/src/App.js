import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Leaderboard from './components/pages/Leaderboard';
import Shop from './components/pages/Shop'
import Message from './components/pages/Message'

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
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/Message" element={<Message/>}/>
        </Routes>
      </Router>
    );
    }
}

export default App;
