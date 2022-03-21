import React, { Component } from 'react';
import '../../css/About.css';

export default class AboutText extends Component {
  render() {
    return (
        <div className="bg-dark">
            <div className="about">
                <h1 className="about-title">About</h1>
                <br/>
                <p style={{fontSize: '25px', color: 'white'}}>
                    &emsp;SmartyPants is a service that allows administrators to design courses that will help 
                    their students engage in material in a more fun, enjoyable manner. It provides tools 
                    that help administrators customize their courses to better suit their students. SmartyPants
                    encourages learning by offering a vibrant but competetive environment and ensuring that
                    hard work and effort is rewarded and not ignored. 
                </p>
                <br/><br/><br/>
                <p style={{fontSize: '25px', color: 'white'}}>
                    &emsp;SmartyPants was created by Zhuoming Han, DeShaune Jean-Charles, Zhen Wu, and Syed Hasan,
                    students at the University of Florida. We believe that the education system can be bettered by encouraging 
                    joy in the process of learning. We hope that SmartyPants is a step in the right direction for education
                    to become less of a chore and more of a delight.
                </p>        
            </div>
        </div>
    )
  }
}
