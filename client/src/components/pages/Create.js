import React, { Component } from 'react'
import DashNavbar from '../subcomponents/DashNavbar';
import CreateForm from '../subcomponents/CreateForm';

export default class Create extends Component {
  render() {
    return (
      <div className="main">
          <DashNavbar/>
          <CreateForm/>
      </div>
    )
  }
}
