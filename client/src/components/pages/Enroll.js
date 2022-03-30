import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import EnrollForm from '../subcomponents/EnrollForm';

export default class Enroll extends Component {
  render() {
    return (
      <div className="main">
          <DashNavbar/>
          <EnrollForm/>
      </div>
    )
  }
}
