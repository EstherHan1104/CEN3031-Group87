import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import '../../css/Shop.css';

export default class Shop extends Component {
  render() {
    return (
        <div>
          <DashNavbar/>
          <div className="shoppic"/>
        </div>
    )
  }
}
