import React, { Component } from 'react';
import '../../css/DashNavbar.css';
import '../../css/Profile.css';
import default_profile from '../../images/default_profile.jpg';
import DashNavbar from '../subcomponents/DashNavbar';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render(){
    return (
        <div>
            <DashNavbar/>

            <div className="form">
                <h1 className = "title">Profile</h1>
                <div><img src = {default_profile} width = "200" height = "200" alt = "profile"></img></div>
                <button className = "changeButton" onClick = ""> Change Image </button>
                <div>
                    <p className = "text1"> First Name: student</p>
                    <input className = "inputbox" placeholder = "New First Name" ></input>
                    <button className = "saveButton" onClick = ""> Save </button>
                </div> 
                <div>
                    <p className = "text1"> Last Name: student </p>
                    <input className = "inputbox" placeholder = "New Second Name"></input>
                    <button className = "saveButton" onClick = ""> Save </button>
                </div> 
                <div>
                    <p className = "text1"> Username: student1 </p>
                    <input className = "inputbox" placeholder = "New Username"></input>
                    <button className = "saveButton" onClick = ""> Save </button>
                </div> 
                <div>
                    <p className = "text1"> Email: s1@gmail.com </p>
                    <input className = "inputbox" placeholder = "New Email"></input>
                    <button className = "saveButton" onClick = ""> Save </button>
                </div>
                <div>
                    <button className = "saveAllButton"> Save All </button>
                </div> 
            </div>     
        </div>
    )
  }
}
