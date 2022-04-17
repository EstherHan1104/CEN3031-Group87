import axios from 'axios';
import React, { Component } from 'react';
import { Button } from './Button';
import '../../css/Create.css';

export default class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
            modules: [],
            numsAdded: []
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (name) => e => {
        this.setState({
            [name]: e.target.value
        })
    }

    addQA = (question, answer, index) => e => {
        // copy
        let modulesC = [...this.state.modules];
        let numsAddedC = [...this.state.numsAdded];

        // update
        let item = {...this.state.modules[index][this.state[index]]};
        item[this.state[question]] = this.state[answer];
        numsAddedC[index] = numsAddedC[index] + 1;

        // assign
        modulesC[index][this.state[index]] = item;

        this.setState({ 
            modules: modulesC, 
            numsAdded: numsAddedC
        });

        document.getElementById(question).value = '';
        document.getElementById(answer).value = '';
    }

    addModule = (e, index) => {
        this.setState({
            modules: [
                ...this.state.modules,
                {[this.state[index]]: {}}
            ],
            numsAdded: [
                ...this.state.numsAdded,
                0
            ]
        });

        document.getElementById(index).value = '';
    }

    onSubmit(e) {
        e.preventDefault();
        
        const course = {
            courseName: this.state.courseName,
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            modules: this.state.modules
        }

        // send request to db
        axios.post('http://localhost:5000/courses/add', course)
            .then(res => {
                axios.post('http://localhost:5000/enroll', {
                courseName: this.state.courseName,
                email: localStorage.getItem('email'),
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName')
            }) 
                .then(res => {
                    console.log(res.data);
                    window.location = '/dashboard';
                })
                .catch(err => {
                    console.log(err);
                }); 
            })
            .catch(err => {
                console.log(err);
            });    
    }

    successMessage = (index) => {
        console.log(this.state.numsAdded[index]);

        if (this.state.numsAdded[index] > 0) {
            return (
                <div>
                    <h4 style={{color: 'white'}}>
                        {this.state.numsAdded[index]} question(s) added successfully!
                    </h4>
                    <br/>
                </div>
            )
        }

        return null;
    }

    renderModules() {
        let elements = [];
        for (let i = 0; i < this.state.modules.length; i++) {
            let question = "question" + i;
            let answer = "answer" + i;

            elements.push(
                <div key={i}>
                    <div className="module">
                        <h2>Module {i + 1}:</h2>
                        <h2>{this.state[i]}</h2><br/>
                        {this.successMessage(i)}
                        <h3 style={{color: 'white'}}>Add Question/Answer Pair</h3><br/>                      
                        <input type="text" name="question" id={question} placeholder="Question" className="inputbox2"
                            onChange={this.handleChange(question)}/>
                        <br/><br/>
                        <input type="text" name="answer" id={answer} placeholder="Answer" className="inputbox2"
                            onChange={this.handleChange(answer)}/>
                        <br/><br/>
                        <Button type="button" onClick={this.addQA(question, answer, i)}>Add</Button>
                    </div>
                </div>
            )
        }

        return elements;
    }

    render() {
        return (              
            <div className="create-bg">
                <div>          
                    <div className="create-form">
                        <h1 className="logintitle">Create Course</h1>
                        <br/>
                        <div className="coursename-bg">
                            <input  type="text" name="courseName" id="courseName" placeholder="Course Name" 
                                className="inputbox1" onChange={this.handleChange("courseName")}/>
                        </div>
                        
                    </div>
                    <div style={{textAlign: 'center', marginTop: '15px'}}>
                        <div className="mod-name-bg">
                            <input  type="text" name="modName" id={this.state.modules.length} placeholder="Module Name" 
                                className="inputbox1" onChange={this.handleChange(this.state.modules.length)}/>
                        </div>
                        <br/>
                        <Button onClick={(e) => this.addModule(e, this.state.modules.length) }>
                            Add Module
                        </Button>
                    </div>
                </div>
                {this.state.modules.length === 0
                ?   <div className="msg">
                        <h1>Please add a module.</h1>
                    </div>
                :   
                    <form onSubmit={this.onSubmit}>
                        <div className="container">                                  
                            {this.renderModules()}                                                       
                        </div><br/><br/>
                        <div className="create-button">
                            <Button type="submit" name="submit">Create</Button>
                        </div>
                    </form>}
            </div> 
        )
    }
}
