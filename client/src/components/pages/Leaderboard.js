import React, { Component } from 'react'
import '../../css/DashNavbar.css';

export default class Leaderboard extends Component {
  render() {
    return (
        <div className='DashNavbar'>
        <a
            className = "text"
            href = "Dashboard"
        >
            <button className='btn-2'>Dashboard</button>
        </a>
        <a
            className = "text"
            href = "Leaderboard"
        >
            <button className='btn-2'>Leaderboard</button>
        </a>

        <a
            className = "text"
            href = "Message"
        >
            <button className='btn-2'>Message</button>
        </a>

        <a
            className = "text"
            href = "Shop"
        >
            <button className='btn-2'>Shop</button>
        </a>
    </div> 
    )
  }
}
