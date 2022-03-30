import React, { Component } from 'react'
import LoginNavbar from '../subcomponents/LoginNavbar'
import RegisterForm from '../subcomponents/RegisterForm';

export default class Register extends Component {
  render() {
    return (
      <div className="main">
          <LoginNavbar/>
          <RegisterForm/>
      </div>
    )
  }
}
