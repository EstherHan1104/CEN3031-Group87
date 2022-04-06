import React, { Component } from 'react';
//import UserContext from '../context/User';
import { Button } from '../subcomponents/Button';
import axios from 'axios';
import '../../css/Login.css';

export default class EnrollForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: ''
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) { 
        e.preventDefault();

        //const user = useContext(UserContext);

        // send request to db
        axios.post('http://localhost:5000/enroll', 
                    {courseName: this.state.courseName, email: localStorage.getItem('email')}) 
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }   

    render() {
        return (
            <div>
                <div className="form">
                    <h1 className="logintitle">Enroll</h1>
                    <br/><br/>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="courseName" placeholder="Course Name" className="inputbox1"
                        onChange={this.onChange}/>
                        <br/><br/><br/>
                        <div style={{paddingTop: '10px'}}>
                            <Button type="submit" name="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
