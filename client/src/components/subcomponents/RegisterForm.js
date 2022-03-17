import React, { Component } from 'react'
import { Button } from './Button';
import axios from 'axios';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
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
                <input type="text" name="username" placeholder="Username" id="inputbox"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="text" name="email" placeholder="Email" id="inputbox"
                onChange={this.onChange}/>
                <br/><br/>
                <input type="text" name="password" placeholder="Password" id="inputbox"
                onChange={this.onChange}/>
                <br/><br/><br/>
                <input type="checkbox"/>    
                <label style={{color: 'white', fontSize: '19px'}}> Student</label>
                <br/>
                <input type="checkbox"/>
                <label style={{color: 'white', fontSize: '19px'}}> Teacher</label>
                <br/><br/><br/>            
                <Button type="submit" name="submit">Submit</Button>
            </form>
        </div>
        )
    }
}
