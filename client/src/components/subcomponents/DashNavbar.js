import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../css/DashNavbar.css';

export default class DashNavbar extends Component {
  render() {
    return (
        <div className="DashNavbar">
            <Link className="text" to="/dashboard">
                <button className="btn-2">Dashboard</button>
            </Link>
            <Link className="text" to="/leaderboard">
                <button className="btn-2">Leaderboard</button>
            </Link>
            <Link className="text" to="/message">
                <button className="btn-2">Message</button>
            </Link>
            <Link className="text" to="/shop">
                <button className="btn-2">Shop</button>
            </Link>
            <Link className="text" to="/enroll">
                <button className="btn-2">Enroll</button>
            </Link>
        </div>
    )
  }
}
