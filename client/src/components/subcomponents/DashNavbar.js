import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import default_profile from '../../images/default_profile.jpg';
import '../../css/DashNavbar.css';

export default class DashNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTeacher: localStorage.getItem('isTeacher')
        }
    }

    addCourse = () => {
        return (
            this.state.isTeacher === 'true'
            ? <Link className="text" to="/create"><button className="btn-2">Create</button></Link>
            : <Link className="text"to="/enroll"><button className="btn-2">Enroll</button></Link>
        )
    }

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
                {this.addCourse()}
                <Link className = "text" to= "/Profile">
                    <div className = "default_pro">
                        <img src = {default_profile} alt = "profile"></img>
                    </div>
                </Link>
            </div>
        )
  }
}
