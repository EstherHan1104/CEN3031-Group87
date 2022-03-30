import React, { Component } from 'react'
import { Button } from './Button';
import axios from 'axios';
import '../../css/Login.css';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            isTeacher: false,
            courses: [],
            error: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.ErrorMessage = this.ErrorMessage.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClick() {
        this.setState({ isTeacher: !this.state.isTeacher })
    }

    onSubmit(e) { 
        e.preventDefault();

        //create user
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            isTeacher: this.state.isTeacher,
            courses: this.state.courses
        }

        // send request to db
        axios.post('http://localhost:5000/users/add', user) 
            .then(res => {
                // assign error status
               
                this.setState({ error: res.data.error })
                 
                if (!this.state.error) {
                    window.location = '/login';
                }
            });        
    }   
    
    // return error message to be rendered
    ErrorMessage() {
        if (this.state.error === 'EMPTY_FIELD') {
            return (
                <div className="error">
                    <p>At least one field is empty. Please fill out all fields.</p>
                </div>
            );
        }
        else if (this.state.error === 'INVALID_EMAIL') {
            return (
                <div className="error">
                    <p>Email does not contain '@'. Please input valid email.</p>
                </div>
            )
        }
        else if (this.state.error === 'USER_EXISTS') {
            return (
                <div className="error">
                    <p>User with this email already exists. Try logging in.</p>
                </div>
            );
        }
        else {
            return null;
        }
      }

    render() {
        return (
            <div className="form">
            <h1 id="logintitle">Register</h1><br/>
            {<this.ErrorMessage/>}
            <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" name="firstName" placeholder="First Name" id="inputboxinline1"
                    onChange={this.onChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" id="inputboxinline2"
                    onChange={this.onChange}/>
                </div>
                <br/>
                <input type="text" name="username" placeholder="Username" id="inputbox1"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="text" name="email" placeholder="Email" id="inputbox2"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="password" name="password" placeholder="Password" id="inputbox3"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="checkbox" onClick={this.onClick}/>    
                <label style={{color: 'white', fontSize: '19px'}}> I am a Teacher</label>
                <br/><br/><br/>           
                <Button type="submit" name="submit">Submit</Button>
            </form>
        </div>
        )
    }
}
