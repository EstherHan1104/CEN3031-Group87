import React, { Component } from 'react'
import '../../css/Login.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showError: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ErrorMessage = this.ErrorMessage.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    // send request to db
    axios.post('https://smartypants-project.herokuapp.com/users/', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {   
        if (res.data.success) {
          localStorage.setItem('token', res.data.user);
          localStorage.setItem('email', this.state.email)
          localStorage.setItem('isTeacher', res.data.isTeacher)
          localStorage.setItem('firstName', res.data.firstName)
          localStorage.setItem('lastName', res.data.lastName)
          window.location = '/dashboard';
        }
        else {
          this.setState({ showError: true });
        }
      })
      .catch(e => console.error(e))
  }

  // return error message
  ErrorMessage() {
    if (this.state.showError) {
      return (
        <div className="error">
          <p>Incorrect username or password. Please try again.</p>
        </div>
      );
    }
    else 
      return null;
  }

  render() {
    return (    
      <div>
        <div className="form">
            <h1 className="logintitle">Login</h1>
            {<this.ErrorMessage/>}
            <form onSubmit={this.onSubmit}>
                <input type="text" name="email" placeholder="Email" className="inputbox1"
                  onChange={this.onChange}/>
                <br/><br/>
                <input type="password" name="password" placeholder="Password" className="inputbox2"
                  onChange={this.onChange}/>
                <br/><br/><br/>
                <Button type="submit" name="submit">Submit</Button>
            </form>
            <div className="form-register">
              <p className="inline" style={{color: 'white'}}>Don't have an account? </p>
              <Link to="/register" className="inline" style={{color: '#00FFFF'}}>Sign up</Link>
            </div>
        </div>
      </div>    
    )
  }
}
