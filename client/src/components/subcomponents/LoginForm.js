import React, { Component } from 'react'
import '../../css/Login.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
        <div className="form">
            <h1 id="logintitle">Login</h1><br/>
            <form>
                <input type="text" name="email" placeholder="Email" id="inputbox"
                  onChange={this.onChange}/>
                <br/><br/>
                <input type="text" name="password" placeholder="Password" id="inputbox"
                  onChange={this.onChange}/>
                <br/><br/><br/>
                <Button type="submit" name="submit">Submit</Button>
            </form>
            <div className="form-register">
              <p className="inline" style={{color: 'white'}}>Don't have an account? </p>
              <Link to="/register" className="inline" style={{color: '#00FFFF'}}>Sign up</Link>
            </div>
        </div>
    )
  }
}
