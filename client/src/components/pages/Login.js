import React, { Component } from 'react'
import LoginNavbar from '../subcomponents/LoginNavbar';
import LoginForm from '../subcomponents/LoginForm';

export default class Login extends Component {
  render() {
    return (
        <div className="main">
            <LoginNavbar/>  
            <LoginForm/>
        </div>
      
    )
  }
}
