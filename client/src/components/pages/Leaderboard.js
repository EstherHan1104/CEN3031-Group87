import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import '../../css/Leaderboard.css';

export default class Leaderboard extends Component {
  render() {
    return (
      <div>
      <DashNavbar/>
      <div className="lbpic"/>
      </div>
    )
  }
}
