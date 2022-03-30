import React, { Component } from 'react';
//import UserContext from '../context/User';
import { Button } from '../subcomponents/Button';
import axios from 'axios';
import '../../css/Login.css';

export default class EnrollForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
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
        axios.post('http://localhost:5000/enroll/', 
                    {name: this.state.name, email: localStorage.getItem('email')}) 
            .then(res => {
                console.log(res.data);
            });        
    }   

    render() {
        return (
            <div>
                <div className="form">
                    <h1 id="logintitle">Enroll</h1>
                    <br/><br/>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="name" placeholder="Course Name" id="inputbox1"
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
