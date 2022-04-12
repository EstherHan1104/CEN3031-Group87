import React, { Component } from 'react';
//import UserContext from '../context/User';
import { Button } from '../subcomponents/Button';
import axios from 'axios';
import '../../css/Login.css';

export default class EnrollForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
            firstName: '',
            lastName: '',
            success: false
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) { 
        e.preventDefault();

        const course = {
            courseName:  this.state.courseName,
            email: localStorage.getItem('email'),
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        // send request to db
        axios.post('http://localhost:5000/enroll', course) 
            .then(res => {
                console.log(res.data);
                this.setState({ success: true })
            })
            .catch(err => {
                console.log(err);
            });

        document.getElementById("courseName").value = '';
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';

    }   

    render() {
        return (
            <div>
                <div className="form">
                    <h1 className="logintitle">Enroll</h1>
                    {this.state.success 
                    ? <div>
                        <h4 style={{color: 'white'}}>Successfully enrolled in '{this.state.courseName}'!</h4>
                        <br/>
                      </div>
                    : null}
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="courseName" placeholder="Course Name" className="inputbox1"
                        onChange={this.onChange}/>
                        <br/><br/>
                        <h3 style={{color: 'white'}}>Teacher's name:</h3>
                        <br/>
                        <input type="text" name="firstName" placeholder="First" className="inputboxinline1"
                        onChange={this.onChange}/>
                        <input type="text" name="lastName" placeholder="Last" className="inputboxinline2"
                        onChange={this.onChange}/>
                        <br/><br/><br/>
                        <Button type="submit" name="submit">Submit</Button>                    
                    </form>
                </div>
            </div>
        )
    }
}
