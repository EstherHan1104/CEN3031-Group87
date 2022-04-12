import React, { Component } from 'react'
import '../../css/About.css';
import LoginNavbar from '../subcomponents/LoginNavbar';
import AboutText from '../subcomponents/AboutText';

export default class About extends Component {
  render() {
    return (
      <div>
        <LoginNavbar/>
        <AboutText/>
      </div>
    )
  }
}
