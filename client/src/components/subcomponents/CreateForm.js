import axios from 'axios';
import React, { Component } from 'react';
import { Button } from './Button';

export default class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
            qna: {},
            question: '',
            answer: '',
            numAdded: 0
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick() {
        // update qna dictionary and increment numAdded
        this.setState({
            qna: {
                ...this.state.qna,
                [this.state.question]: this.state.answer
            },
            numAdded: this.state.numAdded + 1
        })

        // empty input fields
        document.getElementById("question").value = '';
        document.getElementById("answer").value = '';
    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            courseName: this.state.courseName,
            qna: this.state.qna,
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName')
        }

        // send request to db
        axios.post('http://localhost:5000/courses/add', course)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });    

        axios.post('http://localhost:5000/enroll', {
            courseName: this.state.courseName,
            email: localStorage.getItem('email'),
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName')
        }) 
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            }); 
            
        document.getElementById("courseName").value = '';
        document.getElementById("question").value = '';
        document.getElementById("answer").value = '';
    }

    successMessage() {
        if (this.state.numAdded > 0) {
            return (
                <div>
                    <h4 style={{color: 'white'}}>
                        {this.state.numAdded} question(s) added successfully!
                    </h4>
                    <br/>
                </div>
            )
        }

        return null;
    }

    render() {
        return (
            <div>
                <div className="form">
                    <h1 className="logintitle">Create Course</h1><br/>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="courseName" id="courseName" placeholder="Course Name" className="inputbox1"
                            onChange={this.onChange}/>
                        <br/><br/>
                        <h3 style={{color: 'white'}}>Add Question/Answer Pair</h3><br/>
                        {this.successMessage()}
                        <input type="text" name="question" id="question" placeholder="Question" className="inputbox2"
                            onChange={this.onChange}/>
                        <br/><br/>
                        <input type="text" name="answer" id="answer" placeholder="Answer" className="inputbox2"
                            onChange={this.onChange}/>
                        <br/><br/>
                        <Button type="button" onClick={this.onClick}>Add</Button>
                        <br/><br/><br/>
                        <Button type="submit" name="submit">Create</Button>
                    </form>
                </div>
            </div>
        )
    }
}
