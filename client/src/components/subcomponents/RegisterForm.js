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
            isTeacher: false
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClick() {
        this.setState({ isTeacher: !this.state.isTeacher })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            isTeacher: this.state.isTeacher
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className="form">
            <h1 id="logintitle">Register</h1><br/>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" name="firstName" placeholder="First Name" id="inputboxinline"
                    onChange={this.onChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" id="inputboxinline"
                    onChange={this.onChange}/>
                </div>
                <br/>
                <input type="text" name="username" placeholder="Username" id="inputbox"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="text" name="email" placeholder="Email" id="inputbox"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="password" name="password" placeholder="Password" id="inputbox"
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
